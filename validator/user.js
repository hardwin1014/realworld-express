const { body } = require("express-validator");
const validatie = require("../middleware/validatie");
const { User } = require("../model");
const md5 = require("../util/md5");

exports.register = validatie([
  body("user.username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) {
        return Promise.reject("用户名已存在");
      }
    }),

  body("user.password").notEmpty().withMessage("密码不能为空"),

  body("user.email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式不正确")
    .bail() // 如果前面验证失败，就不会往后走了
    .custom(async (email) => {
      // 自定义校验规则，邮箱不能重复
      const user = await User.findOne({ email });
      if (user) {
        // 在async中把promise返回失败
        return Promise.reject("邮箱已存在");
      }
    }),
]);

exports.login = [
  // 第一个通过才会走下一个
  validatie([
    body("user.email").notEmpty().withMessage("邮箱不能为空"),
    body("user.password").notEmpty().withMessage("密码不能为空"),
  ]),
  // 当用户存在后，再校验密码
  validatie([
    body("user.email").custom(async (email, { req }) => {
        // user model中关于查数据，排除了password，这里我们需要password，手动使用select('password')查出来
      const user = await User.findOne({ email }).select(['password','email','username','bio','image']);
      if (!user) {
        return Promise.reject("用户不存在");
      }

      // 将数据挂载到请求对象中，后续的中间件也可以使用了
      req.user = user;
    }),
  ]),
  validatie([
    body("user.password").custom(async (password, { req }) => {
      if (md5(password) !== req.user.password) {
        return Promise.reject("密码不存在");
      }
    }),
  ]),
];
