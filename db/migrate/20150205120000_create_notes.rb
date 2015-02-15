class CreateNotes < ActiveRecord::Migration
	def change
		create_table :notes do |t|
			t.string :title
			t.string :description
			t.string :content
			t.integer :user_id

			t.timestamps
		end
	end
end
			# t.integer :picture_id