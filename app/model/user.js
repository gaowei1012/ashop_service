
'use strict'

const bcryptjs = require('bcryptjs') 

/**
 * 用户注册model
 * @app app
 * @returns user
 */

module.exports = app => {
  let user = app.model.import('../domain/user')

  user.add = async function(username, password) {

    const salt = bcryptjs.genSaltSync(10)
    let npassword = bcryptjs.hashSync(password, salt)
    
    const user = await this.create({ username })

    // 写入数据库
    const userLogin = await app.model.UserLogin.create({npassword, username,salt})
  }
  return user
}
