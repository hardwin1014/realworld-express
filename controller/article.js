// 文章列表  默认全局返回最新文章
exports.getNewArticle = async (req, res, next) => {
  try {
    res.send("文章列表");
  } catch (error) {
    next(error);
  }
};

// 推荐文章

exports.RecommendArticle = async (req, res, next) => {
  try {
    res.send("推荐文章");
  } catch (error) {
    next(error);
  }
};

// 文章详情
exports.getArticleDetails = async (req, res, next) => {
  try {
    res.send("获取文章详情");
  } catch (error) {
    next(error);
  }
};

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    res.send("创建文章");
  } catch (error) {
    next(error);
  }
};

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    res.send("更新文章");
  } catch (error) {
    next(error);
  }
};

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    res.send("删除文章");
  } catch (error) {
    next(error);
  }
};

// 创建评论
exports.createComment = async (req, res, next) => {
  try {
    res.send("创建评论");
  } catch (error) {
    next(error);
  }
};

// 获取评论
exports.getComment = async (req, res, next) => {
  try {
    res.send("获取多条评论");
  } catch (error) {
    next(error);
  }
};

// 删除评论
exports.deleteComment = async (req, res, next) => {
  try {
    res.send("删除评论");
  } catch (error) {
    next(error);
  }
};

// 喜欢文章
exports.favorite = async (req, res, next) => {
  try {
    res.send("删除评论");
  } catch (error) {
    next(error);
  }
};

//取消喜欢文章
exports.unFavorite = async (req, res, next) => {
    try {
      res.send("删除评论");
    } catch (error) {
      next(error);
    }
  }