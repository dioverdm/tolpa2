import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import ErrorHandler from "../utils/errorHandler.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        });

        // Update sender's and receiver's contact lists
        await Promise.all([
            User.findByIdAndUpdate(senderId, { $addToSet: { contacts: receiverId } }),
            User.findByIdAndUpdate(receiverId, { $addToSet: { contacts: senderId } })
        ]);
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    });

    if (newMessage) {
        conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
});

export const getMessages = catchAsyncErrors(async (req, res, next) => {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
});

export const getLastMessage = catchAsyncErrors(async (req, res, next) => {
    const { userId: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({ participants: { $all: [senderId, userToChatId] } })
        .populate("messages")
        .lean();
    if (!conversation) {
        return next(new ErrorHandler("Conversation not found", 404));
    }
    const lastMessage = conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1] : null;
    res.json(lastMessage);
});
