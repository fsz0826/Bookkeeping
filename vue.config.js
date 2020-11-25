const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Bookkeeping/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve('src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() //只包含icons目录
      .use('svg-sprite0loader').loader('svg-sprite-loader').options({extra: false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) //其他svg loader 排除 icons 目录
  }
}