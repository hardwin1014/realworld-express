const { body } = require("express-validator");
const validatie = require("../middleware/validatie");

exports.createArticle = validatie([
  body("article.title").notEmpty().withMessage("文章标题不能为空"),
  body("article.description").notEmpty().withMessage("文章摘要不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);
