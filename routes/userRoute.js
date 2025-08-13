

import express from "express";;
// Controllers
import { SignUp } from "../controllers/authentication.js";
import { LogIn } from "../controllers/authentication.js";

export const userRouter = express.Router();


userRouter.post("/signup", SignUp);
userRouter.post("/login", LogIn)
