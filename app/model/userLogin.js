'use strict'

const bcryptjs = require('bcryptjs')

module.exports = app => {
  let userLogin = app.model.import('../domain/userLogin')

  userLogin.updatedPassword = async function(username, pass) {
    let salt = bcryptjs.genSaltSync(10)
    let npass = bcryptjs.hashSync(pass,salt)
    const userLogin = await app.findOne({where: {username: username}})
    if (!userLogin) {
      return null
    }
    userLogin.update({npass, salt})
    return userLogin
  }
  return userLogin
}
