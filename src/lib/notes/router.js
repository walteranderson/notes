import Router from 'express-promise-router'
import Note from './note.model'

const router = Router()

/**
 * GET /api/notes
 */
router.get('/', async (req, res) => {
  const { user } = req
  const notes = await user.$relatedQuery('notes')
  res.send(notes)
})

/**
 * POST /api/notes
 */
router.post('/', async (req, res) => {
  const { user, body } = req
  // TODO: validate req.body first
  const note = await user.$relatedQuery('notes').insert({
    ...body,
    user_id: user.id
  })

  res.send(note)
})

/**
 * GET /api/notes/:id
 */
router.get('/:id', async (req, res) => {
  const { user, params } = req
  const note = await user
    .$relatedQuery('notes')
    .eager('links')
    .findById(params.id)
    .throwIfNotFound()

  res.send(note)
})

/**
 * PATCH /api/notes/:id
 */
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const note = await Note.query().patchAndFetchById(id, req.body)

  res.send(note)
})

/**
 * DELETE /api/notes/:id
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Note.query()
    .delete()
    .findById(id)
  res.send(204)
})

export default router
