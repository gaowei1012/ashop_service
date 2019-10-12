
'use strict';
// const sqlConfig = require('../config');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1520690141955_3949';

  // add your config here
  config.middleware = [ 'errorHandler' ]

  // sequelize config
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    // dialectOptions: {
    //   charset: 'utf8mb4',
    // },
    database: 'wx_shop',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: 'gao129231wei',
    timezone: '+08:00',
  };

  // config.swaggerdoc = {
  //   dirScanner: './app/controller',
  //   basePath: '/',
  //   appInfo: {
  //     title: '分销系统服务端',
  //     description: '分销',
  //     version: '1.0.0'
  //   }
  // };

  // config.swaggerdoc = {
  //   //dirScanner: '../app/controller',
  //   basePath: '/',
  //   appInfo: {
  //     title: 'egg-swagger',
  //     description: 'swagger-ui for egg js api',
  //     version: '1.0.0'
  //   },
  //   schemes: ['http', 'https'],
  //   consumes: ['application/json'],
  //   produces: ['application/json'],
  //   securityDefinitions: {
  //     // apikey: {
  //     //   type: 'apiKey',
  //     //   name: 'clientkey',
  //     //   in: 'header',
  //     // },
  //     // oauth2: {
  //     //   type: 'oauth2',
  //     //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
  //     //   flow: 'password',
  //     //   scopes: {
  //     //     'write:access_token': 'write access_token',
  //     //     'read:access_token': 'read access_token',
  //     //   },
  //     // },
  //   },
  //   enableSecurity: false,
  //   // enableValidate: true,
  //   routerMap: false,
  //   enable: true,
  // };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:3000' ],
  };

  config.cors = {
    credentials: true,
  };

  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: '/jwt', // optional
  }

  config.alinode = {
    enable: true,
    appid: '78367',
    secret: '4ba609a5e26d28a23d3b94d40a7263fe72efa289',
  };

  return config;
};
