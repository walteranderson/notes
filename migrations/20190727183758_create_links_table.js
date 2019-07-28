exports.up = knex => {
  return knex.schema.createTable('links', table => {
    table.increments('id').primary()
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
    table.string('href')
    table.string('title')
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('links')
}
