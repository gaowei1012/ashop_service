'use strict';

module.exports = app => {

  /**
   * 根据环境加载路由
   */
  // if (app.config.env === 'prod') {
  //   require('./router/router.prod')(app)
  // } else {
  //   require('./router/router.local')(app)
  // }
  // 指定本地开发环境
  require('./router/router.local')(app)
}
