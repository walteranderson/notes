exports.up = knex => {
  return knex.schema.createTable('notes_tags', table => {
    table
      .integer('note_id')
      .unsigned()
      .notNullable()
    table
      .integer('tag_id')
      .unsigned()
      .notNullable()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('notes_tags')
}
