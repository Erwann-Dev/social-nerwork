import {DateTime} from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import User from '#models/user'
import * as relations from '@adonisjs/lucid/types/relations'

/**
 * Post model
 * @extends BaseModel
 * @example
 * const post = new Post()
 * post.id = 1
 * post.pictureIds = { 1: 'https://example.com/picture.jpg' }
 * post.description = 'This is a post'
 * post.location = 'New York'
 * post.comments = { 1: 'This is a comment' }
 * post.userId = 1
 * post.createdAt = DateTime.local()
 * await post.save()
 */
export default class Post extends BaseModel {
  /**
   * The primary key of the table
   * @type {number}
   * @memberof Post
   */
  @column({isPrimary: true}) declare id: number

  /**
   * The picture IDs of the post
   * @type {object}
   * @memberof Post
   */
  @column() declare pictureIds: object | null

  /**
   * The description of the post
   * @type {string}
   * @memberof Post
   */
  @column() declare description: string | null

  /**
   * The location of the post
   * @type {string}
   * @memberof Post
   */
  @column() declare location: string | null

  /**
   * The comments on the post
   * @type {object}
   * @memberof Post
   */
  @column() declare comments: object | null

  /**
   * The ID of the user who created the post
   * @type {number}
   * @memberof Post
   */
  @column() declare userId: number

  /**
   * The date and time the post was created
   * @type {DateTime}
   * @memberof Post
   */
  @column.dateTime({autoCreate: true}) declare createdAt: DateTime

  /**
   * The user who liked the post
   * @type {object}
   * @memberof Post
   */
  @column() declare userLiked: object[] | null

  /**
   * The user who created the post
   * @type {BelongsTo<typeof User>}
   * @memberof Post
   */
  @belongsTo(() => User) declare user: relations.BelongsTo<typeof User>
}
