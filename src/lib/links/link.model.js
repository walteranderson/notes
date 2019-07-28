import { Model } from 'objection'
import User from '../users/user.model'
import Note from '../notes/note.model'

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
      relation: Model.ManyToManyRelation,
      modelClass: Note,
      join: {
        from: 'notes_links.link_id',
        to: 'notes_links.note_id'
      }
    }
  }
}
