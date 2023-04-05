const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  findUser,
  sendResetPasswordCode,
  addImageToDB,
} = require("../controllers/user");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/addImageToDB", addImageToDB);
// router.post("/findUser", findUser);
// router.post("/sendResetPasswordCode", sendResetPasswordCode);
module.exports = router;
