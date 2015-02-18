class CreateCategoriesLinks < ActiveRecord::Migration
  def change
    create_table :categories_links do |t|
      t.integer :link_id
      t.integer :category_id

      t.timestamps
    end
  end
end
