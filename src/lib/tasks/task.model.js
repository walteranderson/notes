import Model from '../model'
import User from '../users/user.model'

export default class Task extends Model {
  static tableName = 'tasks'

  static jsonSchema = {
    type: 'object',
    required: ['user_id', 'description']
  }

  static relationMappings = {
    relation: Model.BelongsToRelation,
    modelClass: User,
    join: {
      from: 'tasks.user_id',
      to: 'users.id'
    }
  }
}
