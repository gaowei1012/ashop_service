
module.exports = app => {

  // 基础接口
  app.get('/api/home/index', 'home.home.index')
  app.get('/api/home/banner', 'home.banner.index')
  app.get('/api/shop/all', 'shop.all.index')
  app.post('/api/user/login', app.jwt, 'user.login.login')
  
  // 支付接口

  // 微信小程序接口
}
