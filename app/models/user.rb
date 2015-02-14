class User < ActiveRecord::Base
  has_many :notes
  
  validates :username, uniqueness: true
  validates :username, presence: true
  validates :name, presence: true

  include BCrypt

  def password
    @password ||= Password.new(encrypted_password)
  end

  def password=(new_password)
    @password=Password.create(new_password)
    self.encrypted_password = @password
  end

  def authenticate(password)
    self.password == password
  end
end