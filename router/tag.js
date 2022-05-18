const express = require("express");
const { getTag } = require("../controller/tag");

const router = express.Router();
 
// 获取标签
router.get("/", getTag);


module.exports = router;
