import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CommentsSchema extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('like').defaultTo(0)
      table.text('desc').notNullable()
      table.timestamp('created_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
