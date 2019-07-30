import Router from 'express-promise-router'
import Link from './link.model'
import Note from '../notes/note.model'

const router = Router()

/**
 * GET /api/links
 */
router.get('/', async (req, res) => {
  const { user } = req
  const links = await user.$relatedQuery('links')
  res.send(links)
})

/**
 * POST /api/links
 */
router.post('/', async (req, res) => {
  const { user, body } = req
  const { href, title, note_id = null } = body

  const link = await Link.query().insert({
    user_id: user.id,
    href,
    title
  })

  if (note_id) {
    const note = await Note.query()
      .findById(note_id)
      .throwIfNotFound()
    await note.$relatedQuery('links').relate(link.id)
  }

  res.send(link)
})

/**
 * GET /api/links/:id
 */
router.get('/:id', async (req, res) => {
  const { user, params } = req
  const link = await user
    .$relatedQuery('links')
    .findById(params.id)
    .throwIfNotFound()

  res.send(link)
})

/**
 * PATCH /api/links/:id
 */
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const link = await Link.query().patchAndFetchById(id, req.body)

  res.send(link)
})

/**
 * DELETE /api/links/:id
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Link.query()
    .delete()
    .findById(id)
  res.send(204)
})

export default router
