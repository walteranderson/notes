exports.up = knex => {
  return knex.schema.createTable('links', table => {
    table.increments('id').primary()
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
    table.integer('note_id').unsigned()
    table.string('href')
    table.string('title')
    table.timestamps()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('links')
}
