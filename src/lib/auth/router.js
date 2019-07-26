import Router from 'express-promise-router'
import AuthService from './auth.service'

const router = Router()

/**
 * Authenticate user and return JWT
 */
router.post('/', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await AuthService.validate(email, password)

    res.send(AuthService.generateToken(user.id))
  } catch (err) {
    res.status(400).end()
  }
})

export default router
