import Router from 'express-promise-router'
import User from './user.model'
import PasswordService from './password.service'

const router = Router()

/**
 * Create user
 */
router.post('/', async (req, res) => {
  const { email } = req.body
  const password = await PasswordService.generate(req.body.password)
  const user = await User.query().insert({ email, password })

  res.send(user)
})

export default router
