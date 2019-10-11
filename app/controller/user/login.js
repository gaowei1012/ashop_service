'use strict'

const Controller = require('egg').Controller

class LoginController extends Controller {
  
  async login() {
    const { ctx } = this
    ctx.body = {
      'code': 0,
      'msg': 'success',
      'data': []
    }
  }

}

module.exports = LoginController
