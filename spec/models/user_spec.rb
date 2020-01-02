# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do

  context 'validation tests' do

    it 'ensures name presence' do
      user = User.create(email: 'testy@test.com', password: 'test', password_confirmation: 'test')
      expect(user.valid?).to eq(false)
    end

    it 'ensures email presence' do
      user = User.create(username: 'test', password: 'test', password_confirmation: 'test')
      expect(user.valid?).to eq(false)
    end

    it 'ensure email is valid' do
      user = User.create(username: 'test', email: 'xxxxxxx', password: 'test', password_confirmation: 'test')
      expect(user.valid?).to eq(false)
    end

    it 'ensure email is unique' do
      User.create(username: 'test', email: 'testy@test.com', password: 'password', password_confirmation: 'password')
      user = User.create(username: 'test', email: 'testy@test.com', password: 'password', password_confirmation: 'password')
      expect(user.valid?).to eq(false)
    end

    it 'ensure email domain is valid' do
      user = User.create(username: 'test', email: 'xxxxxxx@xxx.x', password: 'test', password_confirmation: 'test')
      expect(user.valid?).to eq(false)
    end

    it 'ensures password presence' do
      user = User.create(username: 'test', email: 'testy@test.com', password_confirmation: 'test')
      expect(user.valid?).to eq(false)
    end

    it 'ensures password confirmation presence' do
      user = User.create(username: 'test', email: 'testy@test.com', password: 'test')
      expect(user.valid?).to eq(false)
    end

    it 'ensure passwords match' do
      user = User.create(username: 'test', email: 'testy@test.com', password: 'test', password_confirmation: 'xxxxxxxx')
      expect(user.valid?).to eq(false)
    end

    it 'should save successfully' do
      user = User.create(username: 'test', email: 'testy@test.com', password: 'password', password_confirmation: 'password')
      expect(user.valid?).to eq(true)
    end

  end

end
