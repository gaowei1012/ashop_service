'use strict'

module.exports = app => {
  app.role.failureHandler = () => {
    throw('请登录')
  }

  app.role.user('login', (ctx) => {
    // todo
  })
}
