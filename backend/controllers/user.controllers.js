import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../models/user.model.js";


export const getMe = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
})

export const getContactList = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    await user.populate("contacts");

    const contactList = user.contacts.map(contact => {
        return {
            _id: contact._id,
            username: contact.username,
            name: contact.name,
            profilePic: contact.profilePic,
            about: contact.about,
            lastseen: contact.lastseen,
        };
    });

    res.status(200).json(contactList);
});

export const searchUser = catchAsyncErrors(async (req, res, next) => {
    const { username } = req.query;
    const users = await User.find({ username: { $regex: username, $options: 'i' } });
    res.status(200).json(users);
})

export const updateProfile = catchAsyncErrors(async (req, res, next) => {
    const { name, about } = req.body;
    const userId = req.user._id;

    const user = await User.findByIdAndUpdate(userId, { name, about });
    res.status(200).json({ success: true, user });
});
