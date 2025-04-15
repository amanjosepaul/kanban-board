import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UsersModel from "../models/userModel.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UsersModel.findOne({
      email,
    });
    console.log("user -- : ", user);

    if (user) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    const newUserModel = new UsersModel({
      name,
      email,
      password,
    });

    newUserModel.password = await bcrypt.hash(password, 10);
    await newUserModel.save();

    res.status(201).json({
      message: "User created successfully",
      data: newUserModel,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UsersModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Authentication failed",
        success: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const jwToken = jwt.sign(
      { email: UsersModel.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      data: {
        name: user.name,
        email: user.email,
      },
      token: jwToken,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
