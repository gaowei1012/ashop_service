'use strict'

module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next()
    } catch(e) {
      // 所有异常通过app上的error触发
      ctx.app.emit('error', e, this)

      const status = e.status || 500

      const error = status = 500 && app.config.env === 'prod' ? 
        '服务异常，请联系客服' :
        e.message
      // if (app.acceptJSON) {
      //   ctx.body = {
      //     success: false,
      //     msg: error,
      //     result: null
      //   }

      //   if (status === 422) {
      //     ctx.body.detail = e.errors
      //   }
      // } else {
      //   await ctx.render('500', {msg: JSON.stringify(error)})
      // }
      // ctx.status = 200
       // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = {
        code: status, // 服务端自身的处理逻辑错误(包含框架错误500 及 自定义业务逻辑错误533开始 ) 客户端请求参数导致的错误(4xx开始)，设置不同的状态码
        msg: error
      }
      if (status === 422) {
        ctx.body.detail = err.errors
      }
      ctx.status = 200
    }
  }
}
