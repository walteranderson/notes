import Router from 'express-promise-router'

const router = Router()

router.get('/', async (req, res) => {
  const { user } = req
  const notes = await user.$relatedQuery('notes')
  res.send(notes)
})

router.post('/', async (req, res) => {
  const { user, body } = req
  const note = await user
    .$relatedQuery('notes')
    .insert({
      ...body,
      user_id: user.id
    })

  res.send(note)
})

export default router
