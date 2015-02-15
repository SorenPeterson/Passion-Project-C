class Skill < ActiveRecord::Base
	has_many :proficiency
	has_many :users through: :proficiency
	
	validates :ability, uniqueness: true
	validates :ability, presence: true
end