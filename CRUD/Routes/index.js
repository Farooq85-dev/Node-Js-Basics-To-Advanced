const { Router } = require("express");
const {
  AddUser,
  FindUser,
  UpdateUser,
  DeleteUser,
} = require("../Controllers/User/user.controller");

const router = Router();
router.post("/add-user", AddUser);
router.get("/get-user", FindUser);
router.patch("/update-user/:email", UpdateUser);
router.delete("/delete-user/:email", DeleteUser);

module.exports = router;
