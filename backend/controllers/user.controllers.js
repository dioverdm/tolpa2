import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import User from "../models/user.model.js";


export const getMe = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
})

export const getContactList = catchAsyncErrors(async (req, res, next) => {
    const userId = req.user._id;

    // Find the authenticated user by their ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    // Populate the contacts field to get details of each contact
    await user.populate("contacts");

    // Extract the details of each contact
    const contactList = user.contacts.map(contact => {
        return {
            id: contact._id,
            username: contact.username,
            name: contact.name,
            // Add more fields as needed
        };
    });

    res.status(200).json(contactList);
});
