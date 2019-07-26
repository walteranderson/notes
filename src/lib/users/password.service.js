import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export default {
  /**
   * @param  {String} password
   * @return {Promise}
   */
  generate (password) {
    return bcrypt.hash(password, SALT_ROUNDS)
  },

  /**
   * @param  {String} password
   * @param  {User}   user
   * @return {Promise}
   */
  verify (password, user) {
    return bcrypt.compare(password, user.password)
  }
}
