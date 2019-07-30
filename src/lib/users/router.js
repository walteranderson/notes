import Router from 'express-promise-router'
import User from './user.model'
import PasswordService from './password.service'
import AuthService from '../auth/auth.service'

const router = Router()

/**
 * Create user
 */
router.post('/', async (req, res) => {
  const { email } = req.body
  const password = await PasswordService.generate(req.body.password)

  const user = await User.query().insert({ email, password })
  const token = AuthService.generateToken(user.id)

  delete user.password
  res.json({
    user,
    token
  })
})

export default router
