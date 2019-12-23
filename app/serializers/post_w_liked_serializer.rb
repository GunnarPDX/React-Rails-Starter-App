# frozen_string_literal: true

class PostWLikedSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :time, :likes, :liked, :views
  belongs_to :user
  has_many :comments

end