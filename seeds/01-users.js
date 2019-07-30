const {
  default: PasswordGenerator
} = require('../src/lib/users/password.service')
const TABLE_NAME = 'users'

exports.seed = knex =>
  knex(TABLE_NAME)
    .truncate()
    .then(() => PasswordGenerator.generate('notsecret'))
    .then(password => {
      return knex(TABLE_NAME).insert({
        email: 'example@email.com',
        password
      })
    })
