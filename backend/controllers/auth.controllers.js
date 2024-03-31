import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import catchAsyncErrors from "../middleware/catchAsyncErrors.js"
import sendToken from "../utils/jwtToken.js";
import ErrorHandler from "../utils/errorHandler.js";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
    console.log("hello")
    console.log(req.body);
    const { name, username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
        name,
        username,
        password: hashedPassword,
        profilePic
    });

    await newUser.save();
    sendToken(newUser, 200, res);
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body);

    if (!username || !password) {
        return next(new ErrorHandler("Please enter username and password", 400));
    }

    const user = await User.findOne({ username }).select("+password");
    if (!user) {
        return next(new ErrorHandler('Invalid username and password', 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email and password', 401));
    }
    sendToken(user, 200, res);

})


// logout
export const logoutuser = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(0),
        httpOnly: true,
        sameSite: 'None',
        secure: true,
    });
    res.status(200)
        .cookie('token', null, { httpOnly: true, expires: new Date(0), secure: true, sameSite: 'None' })
        .json({
            success: true,
            message: "Logged Out",
        });
});