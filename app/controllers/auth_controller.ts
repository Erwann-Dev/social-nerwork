import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

/**
 * AuthController handles the authentication logic
 */
export default class AuthController {
  /**
   * Registers a new user
   * @param {HttpContext} ctx - The context object containing request and response
   * @returns {Promise<void>} - A promise that resolves to void
   */
  async register({ request, auth, response }: HttpContext) {
    const { username, email, password } = request.only(['username', 'email', 'password'])
    const user = new User()
    user.username = username
    user.email = email
    user.password = password
    await user.save()
    await auth.use('web').login(user)
    return response.created({ message: 'User registered successfully' })
  }

  /**
   * Logs in a user
   * @param {HttpContext} ctx - The context object containing request and response
   * @returns {Promise<void>} - A promise that resolves to void
   */
  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.ok({ message: 'Logged in successfully' })
    } catch (error) {
      return response.badRequest('Invalid credentials')
    }
  }

  /**
   * Logs out a user
   * @param {HttpContext} ctx - The context object containing request and response
   * @returns {Promise<void>} - A promise that resolves to void
   */
  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.ok({ message: 'Logged out successfully' })
  }
}
