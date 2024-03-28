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

    const newUser = new User({
        name,
        username,
        password: hashedPassword
    });

    await newUser.save();
    sendToken(newUser, 200, res);
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body);

    // checking if user has given password and email both
    if (!username || !password) {
        return next(new ErrorHandler("Please enter username and password", 400));
    }

    // all the details of the current login user is saved in user
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
        return next(new ErrorHandler('Invalid username and password', 401));
    }
    // if (!user.verified) {
    //     return next(new ErrorHandler('Please verify your account before logging in.', 401));
    // }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email and password', 401));
    }
    sendToken(user, 200, res);

})


// logout
export const logoutuser = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
});
