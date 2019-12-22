# frozen_string_literal: true

user = User.first || User.create(username: 'Test', email: 'test@test.com', password: 'password', password_confirmation: 'password')

posts = [
  {
    title: 'Seed Post',
    content: 'Hello World! This is the default first post from db:seed',
    time: 'database inception'
  }
]

comments = [
  {
    content: 'test comment',
    user_id: '1',
    post_id: '1',
    time: 'N/A'
  },
  {
    content: 'test comment 2',
    user_id: '1',
    post_id: '1',
    time: 'N/A'
  }
]

posts.each do |post_hash|
  user.posts.create(post_hash)
end

comments.each do |comment_hash|
  user.comments.create(comment_hash)
end

if Rails.env.development?
  AdminUser.create!(email: 'admin@example.coym', password: 'password', password_confirmation: 'password')
end
