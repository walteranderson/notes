exports.up = knex => {
  return knex.schema.createTable('links_tags', table => {
    table
      .integer('link_id')
      .unsigned()
      .notNullable()
    table
      .integer('tag_id')
      .unsigned()
      .notNullable()
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('links_tags')
}
