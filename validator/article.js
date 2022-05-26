const { body, param } = require("express-validator");
const validatie = require("../middleware/validatie");
// const mongoose = require("mongoose");

const { Article } = require("../model");

// 创建文章验证
exports.createArticle = validatie([
  body("article.title").notEmpty().withMessage("文章标题不能为空"),
  body("article.description").notEmpty().withMessage("文章摘要不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);

// 获取文章详情验证
exports.getArticle = validatie([
  validatie.isValidObjectId(["params"], "articleId"),
  // 验证文章id是否是数据库中的id
  // param('articleId').custom(async value => {
  //   // mongoose的方法，验证id，返回Boolean值
  //   if(!mongoose.isValidObjectId(value)){

  //     // 异步promise
  //     // 返回一个失败的promise
  //     return Promise.reject('文章ID类型错误')

  //     // 同步失败
  //     // throw new Error('文章ID类型错误')
  //   }
  //   // 同步成功
  //   // return true
  // })
]);

// 中间件 更新文章验证 校验id
exports.updateArticle = [
  validatie([validatie.isValidObjectId(["params"], "articleId")]),
  // 校验文章是否存在
  async (req, res, next) => {
    const articleId = req.params.articleId;
    const article = await Article.findById(articleId);
    req.article = article // 方便后续拿到
    if (!article) {
      return res.status(404).end();
    }
    next();
  },
  // 修改的文章作者是否是当前登录用户
  async (req, res, next) => {
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end(); // 没有权限
    }
    next();
  },
];

// 删除的验证逻辑和更新的一样的
exports.deleteArticle = exports.updateArticle