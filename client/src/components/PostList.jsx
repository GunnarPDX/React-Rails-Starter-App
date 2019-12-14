import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    fetch('/api/v1/posts')
      .then(posts => posts.json())
      .then(posts => {
        this.setState({
          posts: posts
        })
      })
  }

  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <div key={post.id}>
          <br/>
            {post.user_id} - {post.title} - {post.content}
          <br/>
        </div>
      )
    })
  };

  render() {
    return (
      <div>
        PostList Component
        {this.renderPosts()}
        <br/>
        <Link to="/posts/new">Add a New Post</Link>
      </div>
    )
  }
}

export default PostList
