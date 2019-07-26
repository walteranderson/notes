import AuthService from '../auth/auth.service'

export default async (err, req, res, next) => {
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
    req.user = user

    next()
  } catch(err) {
    console.error(err)
    res.send(401)
  }
}
