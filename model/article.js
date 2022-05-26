const mongoose = require("mongoose");
// 创建时间，更新时间
const baseModel = require("./base-model");

const Schema = mongoose.Schema

const articleSchema = new mongoose.Schema({
  ...baseModel,
  // 标题
  title: {
    type: String,
    required: true,
  },
  // 描述摘要
  description: {
    type: String,
    required: true,
  },
  // 文章内容
  body: {
    type: String,
    required: true,
  },
  // 标签
  tagList: {
    type: [String],
    default: null,
  },
  // 点赞
  favoritesCount:{
    type: Number,
    default: 0
  },
  // 作者
  author:{
    // 记录作者的id
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = articleSchema;
