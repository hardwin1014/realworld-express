const util = require('util')

module.exports = () => {
  return (err, req, res, next) => {
    // err 对象属于原型成员，所以输出会为空,需要util的format方法把err转化成字符串
    // 开发使用
    res.status(500).json({
      error: util.format(err),
    });
  };
};
