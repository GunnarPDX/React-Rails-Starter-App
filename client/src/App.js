import React from 'react';
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom';
import PostList from './views/PostList';
import NewPost from './views/NewPost';
import About from './views/About';
import UserProfile from "./views/UserProfile";
import Navigation from "./components/Navigation";

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">

          <Navigation />
          <br/>
          <br/>


        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/new" component={NewPost} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={UserProfile} />

      </div>
    </Router>
  );
}

export default App;