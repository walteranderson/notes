exports.up = knex => {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table
      .integer('user_id')
      .unsigned()
      .notNullable()
    table.string('description')
    table
      .boolean('completed')
      .defaultTo(false)
      .notNullable()
    table.timestamp('completed_at')
    table.timestamps()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('tasks')
}
