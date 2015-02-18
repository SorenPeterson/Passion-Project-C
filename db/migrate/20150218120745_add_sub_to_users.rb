class AddSubToUsers < ActiveRecord::Migration
  def change
    add_column :users, :sub, :string
  end
end
