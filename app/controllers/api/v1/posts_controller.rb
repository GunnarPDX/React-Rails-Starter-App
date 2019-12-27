# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: %i[like destroy]
      before_action :find_likes_for_posts, only: %i[index]
      before_action :find_post_data, only: %i[show]

      impressionist actions: [:show], unique: %i[impressionable_type impressionable_id session_hash]

      def index
        if user_signed_in?
          render json: @posts_w_liked, each_serializer: PostWLikedSerializer
        else
          render json: {}, status: 401
        end
      end

      def liked_posts
        if user_signed_in?
          # render json: current_user.find_liked_items
          render json: {}, status: 501
        else
          render json: {}, status: 401
        end
      end

      def show
        if user_signed_in?
          logger.debug @post_w_data.liked.present?
          render json: @post_w_data, serializer: PostWLikedSerializer
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
          render json: {}, status: 200
        else
          render json: {}, status: 401
        end
      end

      def create
        if user_signed_in?
          if (post = current_user.posts.create(post_params))
            post.time = Time.now.to_formatted_s(:long_ordinal)
            post.save
            render json: post, status: 201
          else
            render json: post.errors, status: 400
          end
        else
          render json: {}, status: 401
        end
      end

      def destroy
        if user_signed_in?
          if current_user.id == @post.user.id
            @post.destroy!
            render json: {}, status: 202
          else
            render json: {}, status: 403
          end
        else
          render json: {}, status: 401
        end
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def find_likes_for_posts
        @posts_w_liked = []
        posts = Post.all
        posts.each do |p|
          liked = if current_user.liked? p
                    'liked'
                  else
                    'unliked'
                  end

          owner = if current_user.id == p.user.id
                    'true'
                  else
                    'false'
                  end

          class << p
            attr_accessor :liked
            attr_accessor :owner
          end
          p.liked = liked
          p.owner = owner

          @posts_w_liked << p
        end
        @posts_w_liked
      end

      def find_post_data
        post = Post.find(params[:id])

        liked = if current_user.liked? post
                  'liked'
                else
                  'unliked'
                end

        owner = if current_user.id == post.user.id
                  'true'
                else
                  'false'
                end

        class << post
          attr_accessor :liked
          attr_accessor :owner
        end
        post.liked = liked
        post.owner = owner

        @post_w_data = post
      end

      def post_params
        params.require(:post).permit(:title, :content)
      end

    end
  end
end
