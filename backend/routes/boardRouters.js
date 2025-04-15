import express from "express";
import { ensureAuthentication } from "../middlewares/auth.js";
import { addColumn } from "../controllers/columnController.js";

const kanbanBoardRouter = express.Router();

kanbanBoardRouter.post("/column", ensureAuthentication, addColumn);

export default kanbanBoardRouter;
