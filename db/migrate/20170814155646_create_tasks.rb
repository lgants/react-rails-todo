class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :list_id
      t.string :title
      t.text :description
      t.datetime :deadline
      t.boolean :complete

      t.timestamps
    end
  end
end
