const browserEnv = require('browser-env')
const hook = require('vue-node')
const { join } = require('path')

browserEnv()
hook(join(__dirname, './webpack.config.js'))