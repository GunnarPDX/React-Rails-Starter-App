class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, :content, presence: true

  is_impressionable
  acts_as_votable


  # delegate :username, to: :user
  # delegate :username, to: :user, prefix: true

  # def as_json(_options = {})
  #   super(only: %i[title content created_at user_id username])
  # end
end
