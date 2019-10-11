'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {

  async index() {
    this.ctx.body = 'wolo'
  }

  async create() {
    const { ctx } = this
    ctx.body = await ctx.service.shop.all.create()
  }
}

module.exports = HomeController
