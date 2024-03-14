const { Router } = require("express");
// const { getUsers, getUser, createUser, updateUser, deleteUser } = require("./controller");
//const { getUsers, getUserById, addUser, updateUser, removeUser, paginationUser, getUserByName } = require("./controller");
const controller = require("./controller");

const router = Router();

router.get("/from=:from&to=:to", controller.paginationUser);
router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id", controller.getUserById);
router.get("/name=:name", controller.getUserByName);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.removeUser);

module.exports = router;

