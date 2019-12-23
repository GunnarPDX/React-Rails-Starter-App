class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, :content, presence: true

  is_impressionable
  acts_as_votable

  def likes
    cached_votes_up # uses cached data
    # self.get_likes.size
  end

  def views
    self.impressionist_count
  end

  # delegate :username, to: :user
  # delegate :username, to: :user, prefix: true

  # def as_json(_options = {})
  #   super(only: %i[title content created_at user_id username])
  # end
end
