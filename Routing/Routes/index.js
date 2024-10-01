const { Router } = require("express");
const AddUser = require("../Controllers/user.controller");
const router = Router();

router.post("/add-user", AddUser);

module.exports = router;
