import express from "express";
import {
  signInValidation,
  signUpValidation,
} from "../middlewares/authValidations.js";
import { signIn, signUp } from "../controllers/authConroller.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUpValidation, signUp);
authRouter.post("/sign-in", signInValidation, signIn);

export default authRouter;
