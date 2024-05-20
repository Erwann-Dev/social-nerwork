import { BaseSchema } from '@adonisjs/lucid/schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username', 255).notNullable().unique()
      table.string('password', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('profile_picture', 255).nullable()
      table.json('post_ids').nullable()
      table.json('follower_ids').nullable()
      table.json('sub_ids').nullable()
      table.json('saved_posts').nullable()
      table.json('liked_posts').nullable()
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
