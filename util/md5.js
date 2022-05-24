const crypto = require("crypto");

// 获取crypto 支持的散列算法
// console.log(crypto.getHashes());

// md5出来的数据是固定的，可以通过撞库暴力破解破解密码，
// 相对解决办法：1. 混入私钥，2. 二次加密

module.exports = (str) => {
  const ret = crypto
    .createHash(`md5`)
    .update("hello" + str)
    .digest("hex"); // 十进制
  return ret;
};
