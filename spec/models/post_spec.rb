# frozen_string_literal: true

RSpec.describe Post, type: :model do
  context 'validation tests' do
    before(:each) do
      @user = User.create(username: 'test', email: 'testy@test.com', password: 'password', password_confirmation: 'password')
    end

    it 'ensures title presence' do
      post = @user.posts.create(content: 'Lorem ipsum', time: 'test')

      expect(post.valid?).to eq(false)
    end

    it 'ensures content presence' do
      post = @user.posts.create(title: 'Test Post', time: 'test')

      expect(post.valid?).to eq(false)
    end

    it 'should save successfully' do
      post = @user.posts.create(title: 'Test Post', content: 'Lorem ipsum', time: 'test')

      expect(post.valid?).to eq(true)
    end
  end
end
