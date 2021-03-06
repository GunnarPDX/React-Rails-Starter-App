class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  validates :username, presence: true
  validates_uniqueness_of :username, case_sensitive: false
  has_many :posts, dependent: :destroy
  has_many :comments
  acts_as_voter
end
