const { User } = require("../model");
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
// 用户登录
exports.login = async (req, res, next) => {
  try {
    // 在数据验证的时候，user已经挂载到req上了,所以这里能拿到
    // 因为是mongoose里的数据对象，所以要toJSON转换一下
    const user = req.user.toJSON();
    // 只存user._id
    const token = await jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: "15 days", // 设置token过期时间
    });

    delete user.password;
    res.status(200).json({
      ...user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 1. 获取请求体数据
    // 2. 数据验证,使用express-validator验证框架
    // 3. 验证通过将数据保存到数据库
    let user = new User(req.body.user);
    user.save();
    user = user.toJSON(); // user是mongoose的对象，进行处理了，使用方法转成普通的对象
    delete user.password;
    // 4. 发送成功响应
    res.status(201).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};

// 更新登录用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send("put /user");
  } catch (error) {
    next(error);
  }
};
