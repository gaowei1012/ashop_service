'use strict'

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('userLogin', {
    username: {
      type: DataTypes.String,
      allowNull: false
    },
    password: {
      type: DataTypes.String,
      allowNull: false
    }
  }, {
    tableName: 'userLogin'
  })
}
