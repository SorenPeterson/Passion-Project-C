class CreateLinksUsers < ActiveRecord::Migration
  def change
    create_table :links_users do |t|
      t.integer :user_id
      t.integer :link_id

      t.timestamps
    end
  end
end
