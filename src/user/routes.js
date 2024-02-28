const { Router } = require("express");
// const { getUsers, getUser, createUser, updateUser, deleteUser } = require("./controller");
const { getUsers, getUserById, addUser, updateUser, removeUser } = require("./controller");

const router = Router();

router.get("/", getUsers);
router.post("/", addUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", removeUser);

module.exports = router;
