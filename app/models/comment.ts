import {DateTime} from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import User from '#models/user'
import Post from '#models/post'
import * as relations from '@adonisjs/lucid/types/relations'

/**
 * Comment model
 * @extends BaseModel
 * @example
 * const comment = new Comment()
 * comment.id = 1
 * comment.postId = 1
 * comment.userId = 1
 * comment.like = 0
 * comment.desc = 'This is a comment'
 * comment.createdAt = DateTime.local()
 * await comment.save()
 */
export default class Comment extends BaseModel {
  /**
   * The primary key of the table
   * @type {number}
   * @memberof Comment
   */
  @column({isPrimary: true}) declare id: number

  /**
   * The ID of the post
   * @type {number}
   * @memberof Comment
   */
  @column() declare postId: number

  /**
   * The ID of the user
   * @type {number}
   * @memberof Comment
   */
  @column() declare userId: number

  /**
   * The number of likes on the comment
   * @type {number}
   * @memberof Comment
   */
  @column() declare like: number

  /**
   * The description of the comment
   * @type {string}
   * @memberof Comment
   */
  @column() declare desc: string

  /**
   * The date and time the comment was created
   * @type {DateTime}
   * @memberof Comment
   */
  @column.dateTime({autoCreate: true}) declare createdAt: DateTime

  /**
   * The date and time the comment was updated
   * @type {DateTime}
   * @memberof Comment
   */
  @belongsTo(() => User) declare user: relations.BelongsTo<typeof User>

  /**
   * The post that the comment belongs to
   * @type {Post}
   * @memberof Comment
   */
  @belongsTo(() => Post) declare post: relations.BelongsTo<typeof Post>
}
