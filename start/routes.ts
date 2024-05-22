/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import {middleware} from '#start/kernel'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

/**
 * Auth routes
 * @group auth - Authentication routes
 * @name Auth
 * @base /auth
 * @secure
 * @middleware auth
 */
router.group(() => {
  /**
   * @name register - Register a new user
   * @route POST /register
   * @param {string} username.body.required - The username of the user
   * @param {string} email.body.required - The email of the user
   * @param {string} password.body.required - The password of the user
   * @returns {object} 201 - User registered successfully
   * @returns {object} 400 - Invalid credentials
   * @returns {object} 500 - Internal server error
   */
  router.post('register', '#controllers/auth_controller.register')

  /**
   * @name login - Log in a user
   * @route POST /login
   * @param {string} email.body.required - The email of the user
   * @param {string} password.body.required - The password of the user
   * @returns {object} 200 - Logged in successfully
   * @returns {object} 400 - Invalid credentials
   * @returns {object} 500 - Internal server error
   */
  router.post('login', '#controllers/auth_controller.login')

  /**
   * @name logout - Log out a user
   * @route GET /logout
   * @returns {object} 200 - Logged out successfully
   * @returns {object} 500 - Internal server error
   */
  router.get('logout', '#controllers/auth_controller.logout').use(middleware.auth())
}).prefix('auth')


/**
 * Profile routes
 * @group profile - Profile routes
 * @name Profile
 * @base /profile
 * @secure
 * @middleware auth
 */
router.group(() => {
  /**
   * @name show - Show user profile
   * @route GET /show
   * @returns {object} 200 - User profile
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   */
  router.get('show', '#controllers/profiles_controller.show')

  /**
   * @name update - Update user profile
   * @route PUT /update
   * @param {string} username.body.required - The username of the user
   * @param {string} email.body.required - The email of the user
   * @param {string} password.body.required - The password of the user
   * @returns {object} 200 - User profile updated successfully
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   * @returns {object} 400 - Invalid credentials
   * @returns {object} 404 - Not found
   * @returns {object} 403 - Forbidden
   */
  router.put('update', '#controllers/profiles_controller.update')

  /**
   * @name picture - Upload user profile picture
   * @route POST /picture
   * @param {file} picture.formData.required - The picture to upload
   * @returns {object} 200 - Picture uploaded successfully
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   * @returns {object} 400 - No file uploaded
   * @returns {object} 404 - Not found
   */
  router.post('picture', '#controllers/profiles_controller.uploadPicture')
}).prefix('profile').use(middleware.auth())

/**
 * Post routes
 * @group post - Post routes
 * @name Post
 * @base /post
 */
router.group(() => {
  /**
   * @name index - Get all posts
   * @route GET /
   * @returns {object} 200 - All posts
   * @returns {object} 500 - Internal server error
   * @returns {object} 404 - Not found
   */
  router.get('posts', '#controllers/post_controller.index')

  /**
   * @name store - Create a new post
   * @route POST /
   * @param {file} picture.body.required - The picture to be uploaded on Picture model
   * @param {string} description.body.required - The description of the post
   * @param {string} location.body.required - The location of the post
   * @param {number} userId.body.required - The ID of the user who created the post
   * @param {DateTime} createdAt.body.required - The date and time the post was created
   * @returns {object} 201 - Post created successfully
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   * @returns {object} 400 - Invalid credentials
   * @returns {object} 404 - Not found
   * @returns {object} 403 - Forbidden
   */
  router.post('posts', '#controllers/post_controller.store').use(middleware.auth())

  /**
   * @name show - Show a post
   * @route GET /:id
   * @param {number} id.path.required - The ID of the post
   * @returns {object} 200 - The post
   * @returns {object} 500 - Internal server error
   * @returns {object} 404 - Not found
   */
  router.get('posts/:id', '#controllers/post_controller.show')

  /**
   * @name update - Update a post
   * @route PUT /:id
   * @param {file} picture.body.required - The picture to be uploaded on Picture model
   * @param {string} description.body.required - The description of the post
   * @param {string} location.body.required - The location of the post
   * @param {number} userId.body.required - The ID of the user who created the post
   * @param {DateTime} createdAt.body.required - The date and time the post was created
   * @returns {object} 200 - Post updated successfully
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   * @returns {object} 400 - Invalid credentials
   * @returns {object} 404 - Not found
   * @returns {object} 403 - Forbidden
   */
  router.put('posts/:id', '#controllers/post_controller.update').use(middleware.auth())

  /**
   * @name destroy - Delete a post
   * @route DELETE /:id
   * @param {number} id.path.required - The ID of the post
   * @returns {object} 204 - Post deleted successfully
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   * @returns {object} 404 - Not found
   * @returns {object} 403 - Forbidden
   */
  router.delete('posts/:id', '#controllers/post_controller.destroy').use(middleware.auth())

  /**
   * @name like - Like a post
   * @route POST /:id/like
   * @param {number} id.path.required - The ID of the post
   * @returns {object} 200 - Post liked successfully
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   * @returns {object} 404 - Not found
   * @returns {object} 403 - Forbidden
   */
  router.post('posts/:id/like', '#controllers/post_controller.like').use(middleware.auth())

  /**
   * @name comment - Comment on a post
   * @route POST /:id/comment
   * @param {number} id.path.required - The ID of the post
   * @param {string} desc.body.required - The description of the comment
   * @param {number} userId.body.required - The ID of the user who created the comment
   * @param {DateTime} createdAt.body.required - The date and time the comment was created
   * @returns {object} 200 - Comment created successfully
   * @returns {object} 500 - Internal server error
   * @returns {object} 401 - Unauthorized
   * @returns {object} 404 - Not found
   * @returns {object} 403 - Forbidden
   */
  router.post('posts/:id/comment', '#controllers/post_controller.comment').use(middleware.auth())
}).prefix('post')
