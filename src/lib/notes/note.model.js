import Model from '../Model'
import User from '../users/user.model'
import Link from '../links/link.model'

export default class Note extends Model {
  static tableName = 'notes'

  static jsonSchema = {
    type: 'object',
    required: ['user_id']
  }

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'notes.user_id',
        to: 'users.id'
      }
    },

    links: {
      relation: Model.ManyToManyRelation,
      modelClass: Link,
      join: {
        from: 'notes.id',
        through: {
          from: 'notes_links.note_id',
          to: 'notes_links.link_id'
        },
        to: 'links.id'
      }
    }
  }
}
