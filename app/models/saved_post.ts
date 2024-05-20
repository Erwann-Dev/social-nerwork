import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from '#models/user'
import Post from '#models/post'
import * as relations from '@adonisjs/lucid/types/relations'

export default class SavedPost extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare postId: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare createdAt: DateTime

  @belongsTo(() => User)
  declare user: relations.BelongsTo<typeof User>

  @belongsTo(() => Post)
  declare post: relations.BelongsTo<typeof Post>
}
