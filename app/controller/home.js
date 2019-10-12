'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this

    ctx.body = '我是测试接口'
  }
}

module.exports = HomeController
