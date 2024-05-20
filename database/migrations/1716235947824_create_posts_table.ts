import { BaseSchema } from '@adonisjs/lucid/schema'

export default class PostsSchema extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.json('picture_ids').nullable()
      table.text('description').nullable()
      table.string('location', 255).nullable()
      table.json('comments').nullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(this.now())
      table.json('user_liked').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
