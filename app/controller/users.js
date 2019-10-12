'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async login() {
    const { ctx } = this
  
    ctx.body = {
      'code': 0,
      'msg': 'success',
      'data': []
    }
  }

  async getInfo() {
    const { ctx } = this
    
    ctx.body = {
      'code': 0,
      'msg': 'success',
      'data': []
    }
  }
}

module.exports = UserController
