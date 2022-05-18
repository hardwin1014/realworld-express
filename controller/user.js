// 用户登录
exports.login = async (req, res, next) => {
  try {
    JSON.parse('aaaaaa')
    res.send("post user/login");
  } catch (error) {
    next(error);
  }
};

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 1. 获取请求体数据
    console.log(req.body);
    // 2. 数据验证
    // 3. 验证通过将数据保存到数据库
    // 4. 发送成功响应
    res.send("post /users");
  } catch (error) {
    next(error);
  }
};

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send("get /user");
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
