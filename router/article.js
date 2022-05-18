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

const router = express.Router();

// 文章列表  默认全局返回最新文章
router.get("/", getNewArticle);

// 推荐文章
router.get("/feed", RecommendArticle);

// 获取文章详情
router.get("/:slug", getArticleDetails);

// 创建文章
router.post("/", createArticle);

// 更新文章
router.put("/:slug", updateArticle);

// 删除文章
router.delete("/:slug", deleteArticle);

// 创建评论
router.post("/:slug/comments", createComment);

// 获取文章多条评论
router.get("/:slug/comments", getComment);

// 删除评论
router.delete("/:slug/comments/:id", deleteComment);

// 点赞
router.post("/:slug/favorite", favorite);

// 取消点赞
router.delete("/:slug/favorite", unFavorite);
module.exports = router;
