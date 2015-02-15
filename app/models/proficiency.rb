class Proficiency < ActiveRecord::Base
belongs_to :user
belongs_to :user

validates :name, uniqueness: true
validates :name, presence: true
end