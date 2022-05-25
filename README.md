### 项目是由realworld设计的api规范进行开发

+ Express + mongoose

### 实现功能

+ 登录，注册
+ 文章的增删改查
+ 标签
+ 喜欢文章操作
+ 不喜欢文章操作

仅对接口进行开发，并没有画前端页面



### 使用的依赖库介绍
#### 处理数据验证使用的框架
+ express-validator基于validator库,在路由中使用，具体看文档https://express-validator.github.io/docs/
+ crypto 支持很多散列算法，这里使用md5
+ jwt token认证,jwt分为三个部分 Header(头部)，Payload(负载，存数据的),Signature(签名，防止数据篡改)  Base64Url算法，token放在HTTP请求头里面，建议 Authorization:Bearer<token> 