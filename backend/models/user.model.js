import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxLength: [30, "Name cannot excced 30 character"],
        minLength: [4, "Name should have atleast 4 character"]
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Please Enter your name"],
    },
    password: {
        type: String,
        required: [true, "Please Enter your Password"],
        minLength: [8, "password should have 8 character minimum"],
        select: false,
    },
    profilePic: {
        type: String,
        default: "",
    },
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    about: {
        type: String,
        default: "Always Up for a Good Conversation!"
    },
    lastseen: { type: Date, default: Date.now }
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

//Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)

}
const User = new mongoose.model("User", userSchema);
export default User;