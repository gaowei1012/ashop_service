
module.sequelize = {

  dialect: 'msyql',

  host: '127.0.0.1',

  port: '3306',

  username: 'root',

  password: 'gao129231wei',

  database: 'nashop',

  pool: {
    max: 5,
    min: 1,
    idle: 500
  },

  define: {
    timestamps: false,
    freezeTableName: true
  },

  timezone: '+08:00'

}
