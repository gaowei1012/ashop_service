'use strict'

const Service = require('egg').Service
const { SUCCESS, ERROR } = require('../../utils/util')

class HomeService extends Service {

  async getList(uid) {
    // todo
    const { ctx } = this
    try {
      const result = ctx.model.User.findOne(uid)
      ctx.status = 200
      return Object.assign(SUCCESS, {
        data: result
      })
    } catch(error) {
      ctx.status = 500
      throw(e)
    }
  } 


  async create(username, password) {
    const { ctx } = this
    try {
      const result = ctx.model.User.save(username, password)
      if (result) {
        ctx.status = 200
        return Object.assign(SUCCESS, {
          data: result
        })
      }
      ctx.status = 400
      return Object.assign(ERROR, {
        msg: '注册失败'
      })
    } catch(e) {
      ctx.status = 500
      throw(e)
    }
  }
}

module.exports = HomeService
