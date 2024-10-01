const AddUser = async (req, res) => {
  try {
    return res.send("User Created Successfully!");
  } catch (error) {
    return res.send("Please try again!");
  }
};

module.exports = AddUser;
