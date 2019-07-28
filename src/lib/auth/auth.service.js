import jwt from 'jsonwebtoken'
import User from '../users/user.model'
import PasswordService from '../users/password.service'

const AUTH_KEY = process.env.AUTH_KEY

export default {
  async validate(email, password) {
    const user = await User.query().findOne({ email })

    const isValid = await PasswordService.verify(password, user)
    if (!isValid) throw new Error('Invalid credentials')

    return user
  },

  generateToken(id) {
    return jwt.sign({ id }, AUTH_KEY, { expiresIn: '2 days' })
  },

  verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, AUTH_KEY, (err, decoded) => {
        if (err) return reject(err)

        resolve(decoded)
      })
    })
  }
}
