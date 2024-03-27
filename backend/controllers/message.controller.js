import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

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
