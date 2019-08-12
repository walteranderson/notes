import Model from '../model'
import User from '../users/user.model'
import Link from '../links/link.model'
import Task from '../tasks/task.model'
import Tag from '../tags/tag.model'

export default class Note extends Model {
  static tableName = 'notes'

  static jsonSchema = {
    type: 'object',
    required: ['title', 'user_id']
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
      relation: Model.HasManyRelation,
      modelClass: Link,
      join: {
        from: 'notes.id',
        to: 'links.note_id'
      }
    },

    tasks: {
      relation: Model.HasManyRelation,
      modelClass: Task,
      join: {
        from: 'notes.id',
        to: 'tasks.note_id'
      }
    },

    tags: {
      relation: Model.ManyToManyRelation,
      modelClass: Tag,
      join: {
        from: 'notes.id',
        through: {
          from: 'notes_tags.note_id',
          to: 'notes_tags.tag_id'
        },
        to: 'tags.id'
      }
    }
  }
}
