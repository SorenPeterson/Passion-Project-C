class Link < ActiveRecord::Base
  validates :link, presence: true

  has_and_belongs_to_many :categories
  has_and_belongs_to_many :users
end
