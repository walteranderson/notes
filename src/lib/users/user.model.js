import { Model } from 'objection'
import Note from '../notes/note.model'
import Link from '../links/link.model'

export default class User extends Model {
  static tableName = 'users'

  static jsonSchema = {
    type: 'object',
    required: ['email', 'password']
  }

  static relationMappings = {
    notes: {
      relation: Model.HasManyRelation,
      modelClass: Note,
      join: {
        from: 'users.id',
        to: 'notes.user_id'
      }
    },

    links: {
      relation: Model.HasManyRelation,
      modelClass: Link,
      join: {
        from: 'users.id',
        to: 'links.user_id'
      }
    }
  }
}
