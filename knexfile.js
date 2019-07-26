require('@babel/register')

const config = require('./src/config').default

module.exports = config.knexConfig()
