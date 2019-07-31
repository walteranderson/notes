exports.up = knex => {
  return knex.schema.createTable('tasks_tags', table => {
    table
      .integer('task_id')
      .unsigned()
      .notNullable()
    table
      .integer('tag_id')
      .unsigned()
      .notNullable()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('tasks_tags')
}
