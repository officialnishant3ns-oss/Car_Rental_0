import User from "../models/user.models.js"


const Register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "Something is Missing" })
        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "user already exist go For Login" })
        }
        const user = await User.create({
            fullname: fullname,
            email: email,
            password: password
        })
        const createdUser = await User.findById(user._id).select("-otp -password")
        if (!createdUser) {
            return res.status(500).json({ message: "Something went wrong creating the user" })
        }
        return res.status(200).json({ success: true, message: "User SignUp successfully", user: createdUser })

    } catch (error) {
        console.error("Register Error::", error)
        return res.status(500).json({ message: "Something went wrong while Registering User" })
    }
}


export {Register}