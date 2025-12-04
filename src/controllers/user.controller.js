import User from "../models/user.models.js"
import apierror from "../utils/apierror.js"
import apiresponse from "../utils/apiresponse.js"
import asyncHandler from "../utils/asynchander.js"

const registeruser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body

    if (!username || !email || !password) {
        throw new apierror(400, "All fields are required")
    }
    const userexist = await User.findOne({ email })
    if (userexist) {
        throw new apierror(409, "User with email already.. exist Go login!")
    }
    const user = await User.create({
        username,
        email,
        password,
        role
    })
    return res.status(201).json(
        new apiresponse(201, user, "User registered successfully")
    )
}
)

export { registeruser }