const express = require("express");
const {
  getNewArticle,
  RecommendArticle,
  getArticleDetails,
  createArticle,
  updateArticle,
  deleteArticle,
  createComment,
  getComment,
  deleteComment,
  favorite,
  unFavorite
} = require("../controller/article");
// 身份认证
const auth = require('../middleware/auth')
// 校验文章
const articleValidator = require('../validator/article')


const router = express.Router();

// 文章列表  默认全局返回最新文章
router.get("/", getNewArticle);

// 推荐文章
router.get("/feed", RecommendArticle);

// 获取文章详情
router.get("/:articleId", articleValidator.getArticle, getArticleDetails);

// 创建文章
router.post("/", auth, articleValidator.createArticle, createArticle);

// 更新文章
router.put("/:articleId",auth, articleValidator.updateArticle, updateArticle);

// 删除文章
router.delete("/:articleId", auth, articleValidator.deleteArticle, deleteArticle);

// 创建评论
router.post("/:articleId/comments", createComment);

// 获取文章多条评论
router.get("/:articleId/comments", getComment);

// 删除评论
router.delete("/:articleId/comments/:id", deleteComment);

// 点赞
router.post("/:articleId/favorite", favorite);

// 取消点赞
router.delete("/:articleId/favorite", unFavorite);
module.exports = router;
