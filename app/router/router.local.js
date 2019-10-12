'use strict'

module.exports = app => {

  const { controller } = app
  const BASE_PATH = '/api/v1'
  // 基础接口
  app.get(`${BASE_PATH}/home/index`, controller.home.index)
  app.post(`${BASE_PATH}/user/login`, app.jwt, controller.users.login)
  // app.post('/api/v1/user/:id', app.jwt, 'user.chart.index')
  
  // 支付接口

  // 微信小程序接口
}
