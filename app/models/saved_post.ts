import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from '#models/user'
import Post from '#models/post'
import * as relations from '@adonisjs/lucid/types/relations'

/**
 * SavedPost model
 * @extends BaseModel
 * @example
 * const savedPost = new SavedPost()
 * savedPost.id = 1
 * savedPost.userId = 1
 * savedPost.postId = 1
 * savedPost.createdAt = DateTime.local()
 * await savedPost.save()
 */
export default class SavedPost extends BaseModel {
  /**
   * The primary key of the table
   * @type {number}
   * @memberof SavedPost
   */
  @column({ isPrimary: true })
  declare id: number

  /**
   * The ID of the user
   * @type {number}
   * @memberof SavedPost
   */
  @column()
  declare userId: number

  /**
   * The ID of the post
   * @type {number}
   * @memberof SavedPost
   */
  @column()
  declare postId: number

  /**
   * The date and time the saved post was created
   * @type {DateTime}
   * @memberof SavedPost
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare createdAt: DateTime

  /**
   * The user who saved the post
   * @type {BelongsTo<typeof User>}
   * @memberof SavedPost
   */
  @belongsTo(() => User)
  declare user: relations.BelongsTo<typeof User>

  /**
   * The post that was saved
   * @type {BelongsTo<typeof Post>}
   * @memberof SavedPost
   */
  @belongsTo(() => Post)
  declare post: relations.BelongsTo<typeof Post>
}
