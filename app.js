const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model/index')

const app = express();

// 打印请求日志
app.use(morgan("dev"));
// 解析JSON数据
app.use(express.json());
// 跨域处理
app.use(cors())

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use('/api', router)


// 挂载统一处理服务端错误中间件
app.use(errorHandler())


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
