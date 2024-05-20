import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from '#models/user'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Post extends BaseModel {
  @column({ isPrimary: true }) declare id: number

  @column() declare pictureIds: object | null

  @column() declare description: string | null

  @column() declare location: string | null

  @column() declare comments: object | null

  @column() declare userId: number

  @column.dateTime({ autoCreate: true }) declare createdAt: DateTime

  @column() declare userLiked: object | null

  @belongsTo(() => User) declare user: relations.BelongsTo<typeof User>
}
