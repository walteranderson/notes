exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('email').unique()
    table.string('password')
    table.timestamps()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('users')
}
