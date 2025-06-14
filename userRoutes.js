import express from "express";
import { createUserController, deleteUsersController, getAllUsersController, updateUsersController } from "../controllers/usercontrollers.js";


const userRouter = express.Router();


// http://localhost:8000/users/new
userRouter.post("/new", createUserController);

// http://localhost:8000/users/all
userRouter.get("/all", getAllUsersController);

// http://localhost:8000/users/all
userRouter.delete("/delete/:userId", deleteUsersController);

// http://localhost:8000/users/all
userRouter.put("/update/:userId", updateUsersController);

export default userRouter;