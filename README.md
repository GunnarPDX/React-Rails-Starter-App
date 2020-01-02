# Readme
## About
    A simple React on Rails starter app with Devise user accounts and
    active admin for site management. Feel free to mess around with this
    and build on it. 
    
## Specs
    

``` Ruby 2.6.1 ``` - ```Rails 5.2.3``` - ```Postgres db``` - ``React frontend`` - ```Devise for user accounts/authentication``` - ```Active_Admin for admin accounts```

* Setup


    - $ rvm 2.6.1
    - $ bundle install
    - $ npm install  or  yarn install
    - $ rails db:setup
    - $ rails db:migrate
    - In two separate terminals run:
        - $ rails s
        - $ ./bin/webpack-dev-server
        
    --> visit http://localhost:3000/
    --> visit http://localhost:3000/admin   (for the admin pannel)


* Todo

    - Pass function into components to update post/comment state upon insertion/removal
    - Rework CSS and add icons
    - Improve users profile page
        - add settings page for user
        - add profile pages for other users
    - Improve login pages / add login to react app
    - Allow non-users to view content
    - ...