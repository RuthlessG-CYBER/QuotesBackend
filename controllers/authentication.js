import { User } from "../models/userModel.js";


// Signup Auth
export const SignUp = (req, res) => {

    // Input Validation
    const { name, email, password } = req.body;

    // Validation Check 

    if (!name || !email || !password) {
        return res.status(400).send("Please enter all the fields");
    } else {

        // Check User Exists
        if (User.findOne({ email })) {
            return res.status(400).send("User already exists");
        }

        // Create User
        const user = new User({
            name,
            email,
            password
        });
        // Save User
        user.save()
        return res.status(201).send("User created successfully");
    }
}




// Login Auth
export const LogIn = (req, res) => {

    // Input Validation
    const { email, password } = req.body;

    // Validation Check
    if (!email || !password) {
        return res.status(400).send("Please enter all the fields");
    }

    // Check User
    if (User.findOne({ email, password })) {
        return res.status(201).send("User logged in successfully");
    } else {
        return res.status(400).send("User not found");
    }
}