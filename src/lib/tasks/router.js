import Router from 'express-promise-router'
import Task from './task.model'
import Note from '../notes/note.model'

const router = Router()

/**
 * GET /api/tasks
 */
router.get('/', async (req, res) => {
  const { user } = req
  const tasks = await user.$relatedQuery('tasks')
  res.send(tasks)
})

/**
 * POST /api/tasks
 */
router.post('/', async (req, res) => {
  const { user } = req
  const { description, note_id = null } = req.body

  const task = await Task.query().insert({
    user_id: user.id,
    description
  })

  if (note_id) {
    const note = await user
      .$relatedQuery('notes')
      .findById(note_id)
      .throwIfNotFound()
    await note.$relatedQuery('tasks').relate(task.id)
  }

  res.send(task)
})

/**
 * GET /api/tasks/:id
 */
router.get('/:id', async (req, res) => {
  const { user, params } = req
  const task = await user
    .$relatedQuery('tasks')
    .findById(params.id)
    .throwIfNotFound()
  res.send(task)
})

/**
 * PATCH /api/tasks/:id
 */
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const task = await user
    .$relatedQuery('tasks')
    .findById(id)
    .throwIfNotFound()

  const updatedTask = await task.$query().patchAndFetch(req.body)
  res.send(updatedTask)
})

/**
 * DELETE /api/tasks/:id
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Task.query()
    .delete()
    .findById(id)
  res.send(204)
})

export default router
