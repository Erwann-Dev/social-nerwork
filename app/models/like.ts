import {DateTime} from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import User from '#models/user'
import Post from '#models/post'
import * as relations from '@adonisjs/lucid/types/relations'

/**
 * Like model
 * @extends BaseModel
 * @example
 * const like = new Like()
 * like.id = 1
 * like.userId = 1
 * like.postId = 1
 * like.createdAt = DateTime.local()
 * await like.save()
 */
export default class Like extends BaseModel {
  /**
   * The primary key of the table
   * @type {number}
   * @memberof Like
   */
  @column({isPrimary: true}) declare id: number

  /**
   * The ID of the user
   * @type {number}
   * @memberof Like
   */
  @column() declare userId: number

  /**
   * The ID of the post
   * @type {number}
   * @memberof Like
   */
  @column() declare postId: number

  /**
   * The date and time the like was created
   * @type {DateTime}
   * @memberof Like
   */
  @column.dateTime({autoCreate: true, autoUpdate: true}) declare createdAt: DateTime

  /**
   * The user who liked the post
   * @type {BelongsTo<typeof User>}
   * @memberof Like
   */
  @belongsTo(() => User) declare user: relations.BelongsTo<typeof User>

  /**
   * The post that was liked
   * @type {BelongsTo<typeof Post>}
   * @memberof Like
   */
  @belongsTo(() => Post) declare post: relations.BelongsTo<typeof Post>
}
