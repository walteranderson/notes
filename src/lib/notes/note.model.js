import { Model } from 'objection'
import User from '../users/user.model'

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
    }
  }
}
