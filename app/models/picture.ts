import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from '#models/user'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Picture extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare altDesc: string | null

  @column()
  declare file: string

  @column()
  declare createdBy: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @belongsTo(() => User)
  declare user: relations.BelongsTo<typeof User>
}
