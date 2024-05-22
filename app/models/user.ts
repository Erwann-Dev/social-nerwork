import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

/**
 * User model
 * @extends BaseModel
 * @example
 * const user = new User()
 * user.id = 1
 * user.username = 'johndoe'
 * user.email = 'test@test.com'
 * user.password = 'password'
 * user.profilePicture = 'https://example.com/profile.jpg'
 * user.postIds = { 1: 'This is a post' }
 * user.followerIds = { 1: 'johndoe' }
 * user.subIds = { 1: 'johndoe' }
 * user.savedPosts = { 1: 'This is a post' }
 * user.likedPosts = { 1: 'This is a post' }
 * user.createdAt = DateTime.local()
 * await user.save()
 */
export default class User extends compose(BaseModel, AuthFinder) {
  /**
   * The primary key of the table
   * @type {number}
   * @memberof User
   */
  @column({ isPrimary: true })
  declare id: number

  /**
   * The username of the user
   * @type {string}
   * @memberof User
   */
  @column()
  declare username: string

  /**
   * The email of the user
   * @type {string}
   * @memberof User
   */
  @column()
  declare email: string

  /**
   * The password of the user
   * @type {string}
   * @memberof User
   */
  @column()
  declare password: string

  /**
   * The profile picture of the user
   * @type {string}
   * @memberof User
   */
  @column()
  declare profilePicture: string | null

  /**
   * The post IDs of the user
   * @type {object}
   * @memberof User
   */
  @column()
  declare postIds: object | null

  /**
   * The follower IDs of the user
   * @type {object}
   * @memberof User
   */
  @column()
  declare followerIds: object | null

  /**
   * The subscription IDs of the user
   * @type {object}
   * @memberof User
   */
  @column()
  declare subIds: object | null

  /**
   * The saved posts of the user
   * @type {object}
   * @memberof User
   */
  @column()
  declare savedPosts: object | null

  /**
   * The liked posts of the user
   * @type {object}
   * @memberof User
   */
  @column()
  declare likedPosts: object | null

  /**
   * The date and time the user was created
   * @type {DateTime}
   * @memberof User
   */
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  /**
   * The date and time the user was updated
   * @type {DateTime}
   * @memberof User
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
