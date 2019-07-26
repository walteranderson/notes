const faker = require('faker')
const TABLE_NAME = 'users'

exports.seed = knex =>
  knex(TABLE_NAME)
    .truncate()
    .then(() => {
      const users = Array(10).fill({}).map(() => ({
        email: faker.internet.email(),
        password: faker.internet.password()
      }))

      users.unshift({
        email: 'test@example.com',
        password: 'notsecret'
      })

      return knex(TABLE_NAME).insert(users)
    })
