/*
 * @Author: your name
 * @Date: 2019-10-12 13:14:48
 * @LastEditTime: 2019-10-29 14:16:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ashop_service/app/controller/home.js
 */
'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this

    ctx.body = {
      code: 1,
      message: 'success'
    }
  }
}

module.exports = HomeController
