const mongoose = require("mongoose");
const baseModel = require("./base-model");
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value),
    select: false // 查的时候不会带出来
  },
  // bio是个人介绍
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});

module.exports = userSchema;
