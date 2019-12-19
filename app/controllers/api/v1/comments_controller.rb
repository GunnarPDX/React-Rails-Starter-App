# frozen_string_literal: true

module Api
  module V1
    class CommentsController < ApplicationController

      def create
        if user_signed_in?
          if (comment = current_user.comments.create(comment_params))
            comment.time = Time.now.to_formatted_s(:long_ordinal)
            comment.save
            render json: comment, status: :created
          else
            render json: comment.errors, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      private

      def comment_params
        params.require(:comment).permit(:content, :post_id)
      end
    end
  end
end
