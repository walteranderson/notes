import Model from '../model'
import User from '../users/user.model'
import Note from '../notes/note.model'

export default class Task extends Model {
  static tableName = 'tasks'

  static jsonSchema = {
    type: 'object',
    required: ['user_id', 'description']
  }

  static relationMappings = {
    user: {
      relation: Model.BelongsToRelation,
      modelClass: User,
      join: {
        from: 'tasks.user_id',
        to: 'users.id'
      }
    },

    note: {
      relation: Model.BelongsToRelation,
      modelClass: Note,
      join: {
        from: 'tasks.note_id',
        to: 'notes.id'
      }
    }
  }
}
