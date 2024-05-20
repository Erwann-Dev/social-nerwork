/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/register', '#controllers/auth_controller.register')

router.post('/login', '#controllers/auth_controller.login')

router.get('/logout', '#controllers/auth_controller.logout')

router
  .get('dashboard', async ({ auth }) => {
    if (auth.isAuthenticated) {
      await auth.user
      return {
        message: 'Welcome to your dashboard',
        user: auth.user,
      }
    }
  })
  .use(middleware.auth())
