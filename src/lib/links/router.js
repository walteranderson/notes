import Router from 'express-promise-router'
import { transaction } from 'objection'
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

  const link = await transaction(Link.knex(), async trx => {
    const link = await Link.query(trx).insert({
      user_id: user.id,
      href,
      title
    })

    if (note_id) {
      const note = await user
        .$relatedQuery('notes', trx)
        .findById(note_id)
        .throwIfNotFound()
      await note.$relatedQuery('links', trx).relate(link.id)
    }

    return link
  })

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
  const { user, params, body } = req
  const { id } = params
  const link = await user
    .$relatedQuery('links')
    .findById(id)
    .throwIfNotFound()

  const updatedLink = await link.$query().patchAndFetch(body)
  res.send(updatedLink)
})

/**
 * DELETE /api/links/:id
 */
router.delete('/:id', async (req, res) => {
  const { user, params } = req
  const { id } = params

  const link = await user
    .$relatedQuery('links')
    .findById(id)
    .throwIfNotFound()

  await link.$query().delete()
  res.send(204)
})

export default router
