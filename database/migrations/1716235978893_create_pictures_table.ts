import { BaseSchema } from '@adonisjs/lucid/schema'

export default class PicturesSchema extends BaseSchema {
  protected tableName = 'pictures'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('alt_desc').nullable()
      table.string('file', 255).notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.integer('created_by').unsigned().references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
