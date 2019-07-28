exports.up = knex => {
  return knex.schema.createTable('notes_links', table => {
    table
      .integer('note_id')
      .unsigned()
      .notNullable()
    table
      .integer('link_id')
      .unsigned()
      .notNullable()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('notes_links')
}
