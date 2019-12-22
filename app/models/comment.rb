class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates :content, presence: true

  is_impressionable
  acts_as_votable

end