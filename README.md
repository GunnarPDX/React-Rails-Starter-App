#Readme
* About
    - A simple React on Rails starter app with Devise user accounts.
    
* Specs
    

    - Ruby 2.6.1
    - Rails 5.2.3
    - Postgres db
    - React frontend
    - Devise for user authentication

* Setup


    - $ rvm 2.6.1
    - $ bundle install
    - $ npm install  or  yarn install
    - $ rails db:setup
    - $ rails db:migrate
    - In two separate terminals run:
        - $ rails s
        - $ ./bin/webpack-dev-server
        
    - -> visit http://localhost:3000/
