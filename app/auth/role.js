
'use strict'

module.exports = app => {
  app.role.failureHandler = () => {
    throw('请登录')
  }

  // 当用户第一次登陆时，给赋值token
  // 当用户再次登陆时，检查所携带的token是否有限
  app.role.user('login', (ctx) => {
  
  })
}
