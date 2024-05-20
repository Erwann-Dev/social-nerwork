import { BaseSchema } from '@adonisjs/lucid/schema'

export default class LikesSchema extends BaseSchema {
  protected tableName = 'likes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
