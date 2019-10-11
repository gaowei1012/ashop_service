'use strict'

/**
 * shop all controller
 * @params app
 * @returns {ShopAll}
 */

const Controller = require('egg').Controller

class ShopAllController extends Controller {
  async index() {
    this.ctx.body = {
      "success": 'OK',
      "result": null
    }
  }
}

module.exports = ShopAllController
