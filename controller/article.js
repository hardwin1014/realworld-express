const { Article, User } = require("../model");
// 获取文章列表
exports.getNewArticle = async (req, res, next) => {
  try {
    const articleCount = await Article.countDocuments();

    const { limit = 20, offset = 0, tag, author } = req.query;

    const filter = {};

    if (tag) {
      filter.tagList = tag;
    }

    if (author) {
      const user = await User.findOne({ username: author });
      filter.author = user ? user._id : null;
    }

    const articles = await Article.find(filter)
      .skip(Number.parseInt(offset)) // 跳过多少条  在查询数据库的时候处理的
      .limit(Number.parseInt(limit)) // 取多少条
      .sort({
        // -1 倒叙 ，1 升序
        createdAt: -1,
      });

    res.status(200).json({
      articles,
      articleCount,
    });
  } catch (error) {
    next(error);
  }
};

// 获取用户关注的作者文章列表
exports.RecommendArticle = async (req, res, next) => {
  try {
    res.send("推荐文章");
  } catch (error) {
    next(error);
  }
};

// 获取文章
exports.getArticleDetails = async (req, res, next) => {
  try {
    console.log(req.params);
    const article = await Article.findById(req.params.articleId).populate(
      "author"
    );
    if (!article) {
      return res.status(404).end();
    }
    res.status(200).json({
      article,
    });
  } catch (error) {
    next(error);
  }
};

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article);
    article.author = req.user._id;
    // 根据id把author查出来，映射这
    article.populate("author");
    await article.save();
    res.status(201).json({
      article,
    });
  } catch (error) {
    next(error);
  }
};

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article; // 中间件中挂载到req上了
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    article.description = bodyArticle.description || article.description;
    article.body = bodyArticle.body || article.body;
    await article.save();
    res.status(200).json({
      article,
    });
  } catch (error) {
    next(error);
  }
};

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    const article = req.article;
    await article.remove();
    res.status(204).end();
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
};
