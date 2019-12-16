# frozen_string_literal: true

class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :time
  belongs_to :user
end
