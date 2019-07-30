import Model from '../model'
import Note from '../notes/note.model'
import Link from '../links/link.model'
import Task from '../tasks/task.model'

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
    },

    tasks: {
      relation: Model.HasManyRelation,
      modelClass: Task,
      join: {
        from: 'users.id',
        to: 'tasks.user_id'
      }
    }
  }
}
