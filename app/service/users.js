'use strict'

const Service = require('egg').Service

class UsersService extends Service {
  async login() {
    const { ctx } = this
    // todo
  }
  async getInfo() {
    const { ctx } = this
  }
}

module.exports = UsersService
