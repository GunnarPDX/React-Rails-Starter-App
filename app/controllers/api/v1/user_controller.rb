# frozen_string_literal: true

module Api
  module V1
    class UserController < ApplicationController

      def index
        if user_signed_in?
          render json: current_user
        else
          render json: {}, status: 401
        end
      end

      def show
        user = User.find(params[:id])
        render json: user
      end

      def posts
        if user_signed_in?
          render json: current_user.posts
        else
          render json: {}, status: 401
        end
      end

    end
  end
end
