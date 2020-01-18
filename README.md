# Readme
![Image of app](https://res.cloudinary.com/dmqtrnawm/image/upload/v1577935317/react-rails-starter-app/starter-app_nu5ats.png)
## About
A simple React on Rails starter app with Devise user accounts and
active admin for site management. The app serves as a simple forum/chat-app
/blog where users can create posts and comment on them. Feel free to mess around with this
, hack it and build on top of it. If you want to contribute just fork it and create a pull request.  License is MIT. 
    
## Specs
    

``` Ruby 2.6.1 ```

```Rails 5.2.3```

```Postgres db```

``React frontend``

```Devise for user accounts/authentication```

```Active_Admin for admin accounts```

## Setup


```
$ rvm 2.6.1
```
```
$ bundle install
```
```
$ npm install  or  yarn install
```
```
$ rails db:setup
```
```
$ rails db:migrate
```
```
In two separate terminals run:
        - $ rails s
        - $ ./bin/webpack-dev-server
```
```   
--> visit http://localhost:3000/
--> visit http://localhost:3000/admin   (for the admin pannel)
```

## Testing
```
$ rspec
```
## To-do

    - Pass function into components to update post/comment state upon insertion/removal
    - Improve users profile page
        - add settings page for user
        - add profile pages for other users
    - Allow non-users to view content
    - ...
