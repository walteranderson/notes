import Model from '../model'
import User from '../users/user.model'
import Note from '../notes/note.model'
import Tag from '../tags/tag.model'

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
    },

    tags: {
      relation: Model.ManyToManyRelation,
      modelClass: Tag,
      join: {
        from: 'tasks.id',
        through: {
          from: 'tasks_tags.task_id',
          to: 'tasks_tags.tag_id'
        },
        to: 'tags.id'
      }
    }
  }
}
