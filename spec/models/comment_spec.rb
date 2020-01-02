# frozen_string_literal: true

RSpec.describe Comment, type: :model do
  context 'validation tests' do

    before(:each) do
      @user = User.create(username: 'test', email: 'testy@test.com', password: 'password', password_confirmation: 'password')
      @post = @user.posts.create(title: 'Test Post', content: 'Lorem ipsum', time: 'test')
      @post_id = @user.posts.first.id
      @user_id = @user.id
    end

    it 'ensures content presence' do
      comment = @user.comments.create(post_id: @post_id, user_id: @user_id)

      expect(comment.valid?).to eq(false)
    end

    it 'ensures post id presence' do
      comment = @user.comments.create(content: 'test', user_id: @user_id)

      expect(comment.valid?).to eq(false)
    end

    it 'should save successfully' do
      comment = @user.comments.create(content: 'test', post_id: @post_id, user_id: @user_id)

      expect(comment.valid?).to eq(true)
    end

  end
end
