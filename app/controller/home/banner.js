'use strict'

const Controller = require('egg').Controller

class BannerController extends Controller {

  async index() {
    this.ctx.body = {
      'success': true,
      'data': [ ]
    }
  }
}

module.exports = BannerController
