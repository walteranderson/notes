import Router from 'express-promise-router'
import Link from './link.model'
import Note from '../notes/note.model'

const router = Router()

router.get('/', async (req, res) => {
  const { user } = req
  const links = await user.$relatedQuery('links')
  res.send(links)
})

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

export default router
