require 'rails_helper'

RSpec.describe User, type: :model do

  context 'validation tests' do

    it 'ensures name presence' do
      user = User.new(email: 'testy@test.com', password: 'test', password_confirmation: 'test').save
      expect(user).to eq(false)
    end

    it 'ensures email presence' do
      user = User.new(username: 'test', password: 'test', password_confirmation: 'test').save
      expect(user).to eq(false)
    end

    it 'ensure email is valid' do
      user = User.new(username: 'test', email: 'xxxxxxx', password: 'test', password_confirmation: 'test').save
      expect(user).to eq(false)
    end

    it 'ensure email domain is valid' do
      user = User.new(username: 'test', email: 'xxxxxxx@xxx.x', password: 'test', password_confirmation: 'test').save
      expect(user).to eq(false)
    end

    it 'ensures password presence' do
      user = User.new(username: 'test', email: 'testy@test.com', password_confirmation: 'test').save
      expect(user).to eq(false)
    end

    it 'ensures password confirmation presence' do
      user = User.new(username: 'test', email: 'testy@test.com', password: 'test').save
      expect(user).to eq(false)
    end

    it 'ensure passwords match' do
      user = User.new(username: 'test', email: 'testy@test.com', password: 'test', password_confirmation: 'xxxxxxxx').save
      expect(user).to eq(false)
    end

    it 'should save successfully' do
      user = User.create(username: 'test', email: 'testy@test.com', password: 'password', password_confirmation: 'password')
      expect(user.valid?).to eq(true)
    end

  end

  context 'scope tests' do
  end

end
