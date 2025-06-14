import userModel from "../models/userModel.js";
const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check validation
    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ sucess: false, message: "ALL Fields is required" });
    }

    // check email already exits or not?
    const isExits = await userModel.findOne({ email });
    if (isExits) {
      return res
        .status(400)
        .send({ sucess: false, message: "Email Already Registered" });
    }

    //adding user in database
    const user = await userModel.create({ name, email, password });

    res
      .status(201)
      .send({ sucess: true, message: "User Created Sucessfully", user });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in createUserController",
      error,
    });
  }
};
const getAllUsersController = async (req, res) => {
  try {
    //getting all users in database
    const users = await userModel.find({});

    res
      .status(200)
      .send({ sucess: true, message: "All Users Fetched Successfuly", users });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getAllUsersController",
      error,
    });
  }
};
const deleteUsersController = async (req, res) => {
  try {
    const { userId } = req.params;
    //deleting all users in database
    const user = await userModel.findByIdAndDelete(userId);
    if (!user) {
      return res
        .status(400)
        .send({ sucess: false, message: "User does not exists" });
    }

    res
      .status(200)
      .send({ sucess: true, message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleteUsersController",
      error,
    });
  }
};
const updateUsersController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    //deleting all users in database
    const user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(400)
        .send({ sucess: false, message: "User does not exits" });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
    await user.save();

    res
      .status(200)
      .send({ sucess: true, message: "User details updated successfully", user });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updateUsersController",
      error,
    });
  }
};
export {
  createUserController,
  getAllUsersController,
  deleteUsersController,
  updateUsersController,
};
