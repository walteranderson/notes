import Model from '../model'
import User from '../users/user.model'
import Note from '../notes/note.model'
import Tag from '../tags/tag.model'

export default class Link extends Model {
  static tableName = 'links'

  static jsonSchema = {
    type: 'object',
    required: ['user_id', 'href']
  }

  static relationMappings = {
    user: {
      relation: Model.BelongsToRelation,
      modelClass: User,
      join: {
        from: 'links.user_id',
        to: 'users.id'
      }
    },

    notes: {
      relation: Model.BelongsToRelation,
      modelClass: Note,
      join: {
        from: 'links.note_id',
        to: 'notes.id'
      }
    },

    tags: {
      relation: Model.ManyToManyRelation,
      modelClass: Tag,
      join: {
        from: 'links.id',
        through: {
          from: 'links_tags.link_id',
          to: 'links_tags.tag_id'
        },
        to: 'tags.id'
      }
    }
  }
}
