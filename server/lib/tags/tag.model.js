import Model from '../model'
import User from '../users/user.model'
import Note from '../notes/note.model'
import Link from '../links/link.model'
import Task from '../tasks/task.model'

export default class Tag extends Model {
  static tableName = 'tags'

  static jsonSchema = {
    type: 'object',
    required: ['user_id', 'name']
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

    notes: {
      relation: Model.ManyToManyRelation,
      modelClass: Note,
      join: {
        from: 'tags.id',
        through: {
          from: 'notes_tags.tag_id',
          to: 'notes_tags.note_id'
        },
        to: 'notes.id'
      }
    },

    links: {
      relation: Model.ManyToManyRelation,
      modelClass: Link,
      join: {
        from: 'tags.id',
        through: {
          from: 'links_tags.tag_id',
          to: 'links_tags.link_id'
        },
        to: 'links.id'
      }
    },

    tasks: {
      relation: Model.ManyToManyRelation,
      modelClass: Task,
      join: {
        from: 'tags.id',
        through: {
          from: 'tasks_tags.tag_id',
          to: 'tasks_tags.task_id'
        },
        to: 'tasks.id'
      }
    }
  }
}
