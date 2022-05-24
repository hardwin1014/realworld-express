const jwt = require("jsonwebtoken");
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)
exports.verify = promisify(jwt.verify)

// 不验证直接解析
exports.decode = promisify(jwt.decode)

// 同步生成token
// asdsasfsdqwewr 签名，随意写，唯一性
// const token = jwt.sign(
//   {
//     foo: "bar",
//   },
//   "asdsasfsdqwewr"
// );
// console.log(token);

// 异步生成
// jwt.sign(
//   {
//     foo: "bar",
//   },
//   "asdsasfsdqwewr",
//   (err, token) => {
//     if (err) {
//       return console.log("生成token失败");
//     }
//     console.log(token);
//   }
// );

// 同步验证token
// const ret = jwt.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NTM0Njc5ODV9.whj2VzTDWX50ZF69jyb3vIutnxr0dGE0UofMh0nMAXQ",
//   "asdsasfsdqwewr"
// );

// console.log(ret);

// 异步验证token
// jwt.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NTM0Njc5ODV9.whj2VzTDWX50ZF69jyb3vIutnxr0dGE0UofMh0nMAXQ",
//   "asdsasfsdqwewr",
//   (err, ret) => {
//     if (err) {
//       return console.log("token 认证失败");
//     }
//     console.log(ret);
//   }
// );
