'use strict'

const bcryptjs = require('bcryptjs')

module.exports = app => {
  //let userLogin = app.model.import('../domain/userLogin')

  // userLogin.updatedPassword = async function(username, password) {

  //   const salt = bcryptjs.genSaltSync(10)
  //   let npassword = bcryptjs.hashSync(password, salt)

  //   // 查询当前用户
  //   const userLogin = await this.findOne({where: username})

  //   if (!userLogin) {
  //     return null
  //   }

  //   userLogin.update({npassword, salt})
  //   return userLogin
  // }
  // return userLogin
}
