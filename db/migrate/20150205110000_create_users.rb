class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.string :name
			t.string :username
			t.string :email
			t.string :encrypted_password
			t.string :age
			t.string :location
			t.integer :experience
			t.integer :level
			t.string :interest

			t.timestamps
		end
	end
end