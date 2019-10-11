'use strict'

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true, // 允许空值
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    tableName: 'user'
  })
}
