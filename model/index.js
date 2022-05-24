const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')
mongoose.connect(dbUrl);
let db = mongoose.connection;

// 失败的时候
db.on('error', err => {
  console.log('MongoDB数据库连接失败', err);
  console.log('失败');
});

// 连接成功
db.once('open', function() {
  console.log('数据库连接成功！');
});

// 组织导出模型
module.exports = {
  // 写的大写开头，到mongoose数据库中会变成users
  User: mongoose.model('User',require('./user')),
  Article: mongoose.model('Article', require('./article'))
}