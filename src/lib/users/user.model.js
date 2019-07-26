import { Model } from 'objection'
import Note from '../notes/note.model'

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
    }
  }
}
