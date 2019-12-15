class Post < ApplicationRecord
  belongs_to :user
  validates :title, :content, presence: true
  # delegate :username, to: :user
  # delegate :username, to: :user, prefix: true

  # def as_json(_options = {})
  #   super(only: %i[title content created_at user_id username])
  # end
end
