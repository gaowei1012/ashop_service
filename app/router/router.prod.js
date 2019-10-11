'use strict'

module.exports = app => {

  // 基础接口
  app.get('/api/shop/all', app.controller.shop.all.index)
  app.post('/api/user/login', app.jwt, 'user.login.login')

  // 支付接口
  
  // 微信小程序接口
}
