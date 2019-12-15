# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def index
        if user_signed_in?
          render json: User.all
        else
          render json: {}, status: 401
        end
      end
    end
  end
end
