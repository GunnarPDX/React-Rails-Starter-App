# frozen_string_literal: true

class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :time
  belongs_to :user
end