const express = require("express");
const {
  getUserData,
  attentionUser,
  cancelUser,
} = require("../controller/profile");

const router = express.Router();

// 获取指定用户资料
router.get("/:username", getUserData);

// 关注用户
router.post("/:username/follow", attentionUser);

// 取消关注
router.delete("/:username/follow", cancelUser);

module.exports = router;
