import {DateTime} from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import User from '#models/user'
import * as relations from '@adonisjs/lucid/types/relations'

/**
 * Picture model
 * @extends BaseModel
 * @example
 * const picture = new Picture()
 * picture.id = 1
 * picture.altDesc = 'This is a picture'
 * picture.file = 'https://example.com/picture.jpg'
 * picture.createdBy = 1
 * picture.createdAt = DateTime.local()
 * await picture.save()
 */
export default class Picture extends BaseModel {
  /**
   * The primary key of the table
   * @type {number}
   * @memberof Picture
   */
  @column({isPrimary: true}) declare id: number

  /**
   * The alt description of the picture
   * @type {string}
   * @memberof Picture
   */
  @column() declare altDesc: string | null

  /**
   * The file path of the picture
   * @type {string}
   * @memberof Picture
   */
  @column() declare filePath: string

  /**
   * The ID of the user who created the picture
   * @type {number}
   * @memberof Picture
   */
  @column() declare createdBy: number

  /**
   * The date and time the picture was created
   * @type {DateTime}
   * @memberof Picture
   */
  @column.dateTime({autoCreate: true}) declare createdAt: DateTime

  /**
   * The user who created the picture
   * @type {BelongsTo<typeof User>}
   * @memberof Picture
   */
  @belongsTo(() => User) declare user: relations.BelongsTo<typeof User>
}
