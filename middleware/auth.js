const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
const { User } = require('../model')


module.exports = async (req, res, next) => {
  // 从请求头获取token, 验证token是否有效token
  // 验证token是否有效
  // 无效-> 响应  401状态码
  // 有效-> 把用户信息读取出来挂载到req请求对象上
  // 继续往下执行
  let token = req.headers.authorization;

  token = token ? token.split("Bearer ")[1] : null;

  if (!token) {
    return res.status(401).end();
  }

  try {
    const decodedToken = await verify(token, jwtSecret);
    req.user = await User.findById(decodedToken.userId)
    next();
  } catch (error) {
    return res.status(401).end();
  }
};
