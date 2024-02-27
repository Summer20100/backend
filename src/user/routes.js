const { Router } = require("express");
// const { getUsers, getUser, createUser, updateUser, deleteUser } = require("./controller");.
const controller = require("./controller");

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id", controller.getUserById);

module.exports = router;
