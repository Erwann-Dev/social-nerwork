import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from '#models/user'
import Post from '#models/post'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare postId: number

  @column()
  declare userId: number

  @column()
  declare like: number

  @column()
  declare desc: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @belongsTo(() => User)
  declare user: relations.BelongsTo<typeof User>

  @belongsTo(() => Post)
  declare post: relations.BelongsTo<typeof Post>
}
