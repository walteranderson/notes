import User from '../lib/users/user.model'
import AuthService from '../lib/auth/auth.service'

export default async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.sendStatus(401)
  }

  const token = req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  try {
    const decoded = await AuthService.verifyToken(token)
    const user = await User.query().findOne({ id: decoded.id })
    delete user.password
    req.user = user

    next()
  } catch (err) {
    console.error(err)
    res.send(401)
  }
}
