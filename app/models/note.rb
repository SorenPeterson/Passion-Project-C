class Note < ActiveRecord::Base
	# has many through users
	belongs_to :user

	validates_length_of :content, :within => 1..140,
	:too_long => "You've exceeded 140 characters",
	:too_short => "You must enter at least 1 character"

end