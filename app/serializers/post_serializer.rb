# frozen_string_literal: true

class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :time, :likes, :liked
  belongs_to :user
  has_many :comments

end
