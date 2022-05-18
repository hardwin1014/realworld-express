const express = require("express");
const {
  login,
  register,
  getCurrentUser,
  updateCurrentUser,
} = require("../controller/user");

const router = express.Router();

// 用户登录
router.post("/users/login", login);

// 用户注册
router.post("/users", register);

// 获取当前登录用户
router.get("/user", getCurrentUser);

// 更新当前登录用户
router.put("/user", updateCurrentUser);

module.exports = router;
