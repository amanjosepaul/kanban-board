import { configDotenv } from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/authRouters.js";
import kanbanBoardRouter from "./routes/boardRouters.js";

configDotenv();

const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/board", kanbanBoardRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`serevr is running on port ${PORT}`);
});
