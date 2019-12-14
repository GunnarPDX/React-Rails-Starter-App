import React from 'react';
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">


          <li><Link to={'/about'} className="nav-link">About</Link></li>
          <li><Link to={'/'} className="nav-link">Home</Link></li>
          <li><Link to={'/posts/new'} className="nav-link">New Post</Link></li>

        <Route exact path="/" component={PostList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts/new" component={NewPost} />

      </div>
    </Router>
  );
}

export default App;