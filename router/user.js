const express = require("express");
const {
  login,
  register,
  getCurrentUser,
  updateCurrentUser,
} = require("../controller/user");
const userValidator = require("../validator/user");
const auth = require('../middleware/auth')


const router = express.Router();

// 用户登录
router.post("/users/login", userValidator.login, login);

// 用户注册
router.post(
  "/users",
  userValidator.register,
  register // 经过验证，执行的具体代码
);

// 获取当前登录用户
router.get("/user", auth, getCurrentUser);

// 更新当前登录用户
router.put("/user", auth, updateCurrentUser);

module.exports = router;
