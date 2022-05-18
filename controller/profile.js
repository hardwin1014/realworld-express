// 获取用户资料
exports.getUserData = async (req, res, next) => {
  try {
    // 处理请求，发送响应
    res.send("获取个人资料");
  } catch (error) {
    next(error);
  }
};

// 关注用户
exports.attentionUser = async (req, res, next) => {
  try {
    res.send("关注用户");
  } catch (error) {
    next(error);
  }
};

// 取消关注
exports.cancelUser = async (req, res, next) => {
  try {
    res.send("取消关注");
  } catch (error) {
    next(error);
  }
};
