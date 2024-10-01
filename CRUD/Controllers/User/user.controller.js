const User = require("../../Models/user.model");

const AddUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({
      message: "User registered successfully!",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send({
      message: "Please try again!",
    });
  }
};

const FindUser = async (req, res) => {
  try {
    const user = await User.findOne();
    if (!user) {
      return res.status(404).send({
        message: "User not found!",
      });
    }
    return res.status(200).send({
      message: "User found successfully!",
      user,
    });
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).send({
      message: "Please try again!",
    });
  }
};

const UpdateUser = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOneAndUpdate(email, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send({
        message: "User not found!",
      });
    }

    return res.status(200).send({
      message: "User updated successfully!",
      user,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).send({
      message: "Please try again!",
    });
  }
};

const DeleteUser = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOneAndDelete(email);
    if (!user) {
      return res.status(404).send({
        message: "User not found!",
      });
    }
    return res.status(200).send({
      message: "User deleted successfully!",
      user,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).send({
      message: "Please try again!",
    });
  }
};

module.exports = { AddUser, FindUser, UpdateUser, DeleteUser };
