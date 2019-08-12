exports.up = knex => {
  return knex.schema.createTable('notes', table => {
    table.increments('id').primary()
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
    table.string('title').notNullable()
    table.text('body')
    table.timestamps()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('notes')
}
