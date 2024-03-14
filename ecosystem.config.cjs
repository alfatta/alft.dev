require('dotenv').config()

const pkg = require('./package')
const port = process.env.PORT

module.exports = {
  apps: [
    {
      name: `${pkg.name}:${port}`,
      port: port,
      exec_mode: 'cluster',
      instances: 1,
      script: './.output/server/index.mjs'
    }
  ]
}