exports.up = knex => {
  return knex.schema.createTable('tags', table => {
    table.increments('id').primary()
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
    table.string('name')
    table.timestamps()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('tags')
}
