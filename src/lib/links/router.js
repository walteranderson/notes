import Router from 'express-promise-router'

const router = Router()

router.get('/', async (req, res) => {
  const { user } = req
  const links = await user.$relatedQuery('links')
  res.send(links)
})
