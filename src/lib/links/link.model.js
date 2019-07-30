import Model from '../model'
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
      relation: Model.BelongsToRelation,
      modelClass: Note,
      join: {
        from: 'links.note_id',
        to: 'notes.id'
      }
    }
  }
}
