
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('email')
    table.string('password')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
