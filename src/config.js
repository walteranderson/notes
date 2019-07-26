export default {
  env: process.env.NODE_ENV || 'development',

  isProduction () {
    return this.env === 'production'
  },

  server: {
    ip: process.env.SERVER_IP || '127.0.0.1',
    port: process.env.SERVER_PORT || 3000
  },

  knexConfig () {
    return this.env === 'development'
      ? this.db.sqlite
      : this.db.mysql
  },

  db: {
    sqlite: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      useNullAsDefault: true
    },
    mysql: {
      client: 'mysql',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      }
    }
  }
}
