# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: %i[show like unlike]
      before_action :find_liked, only: %i[index]

      impressionist actions: [:show], unique: %i[impressionable_type impressionable_id session_hash]

      def index
        if user_signed_in?
          render json: @posts_w_liked
        else
          render json: {}, status: 401
        end
      end

      def liked_posts
        if user_signed_in?
          # render json: current_user.find_up_voted_items
        else
          render json: {}, status: 401
        end
      end

      def show
        if user_signed_in?
          render json: @post
          impressionist(post, 'message...')
        else
          render json: {}, status: 401
        end
      end

      def like
        if user_signed_in?
          if current_user.voted_for? @post
            @post.unliked_by current_user
          else
            @post.liked_by current_user
          end
          render json: {}, status: :created
        else
          render json: {}, status: 401
        end
      end

      def create
        if user_signed_in?
          if (post = current_user.posts.create(post_params))
            post.time = Time.now.to_formatted_s(:long_ordinal)
            post.save
            render json: post, status: :created
          else
            render json: post.errors, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def find_liked
        @posts_w_liked = []
        posts = Post.all
        posts.each do |p|
          if current_user.liked? p
            liked = 'liked'
          else
            liked = 'unliked'
          end
          class << p
            attr_accessor :liked
          end
          p.liked = liked
          @posts_w_liked << p
        end
        @posts_w_liked
      end

      def post_params
        params.require(:post).permit(:title, :content)
      end

    end
  end
end
