class Link < ActiveRecord::Base
  validates :link, presence: true

  before_validation :format_link

  has_and_belongs_to_many :categories
  has_and_belongs_to_many :users

  def format_link
    self.link = self.link.gsub(/^(https?:\/\/)?/) { |capture|
      capture == '' ? 'http://' : capture
    }

    begin
      doc = Pismo::Document.new(self.link)
      self.title = doc.title
    rescue
      self.link = nil
    end
  end
end
