const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router
  .route("/")
  .post(userController.CreateNewUser)
  .get(userController.GetAllUsers);

router
  .route("/:id")
  .get(userController.GetUsersByID)
  .put(userController.UpdateUserByID);

module.exports = router;
