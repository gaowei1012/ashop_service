
module.exports = app => {

  // 基础接口
  app.get('/api/v1/home/index', 'home.home.index')
  app.get('/api/v1/home/banner', 'home.banner.index')
  app.post('/api/v1/user/login', app.jwt, 'user.login.login')
  
  // 支付接口

  // 微信小程序接口
}
