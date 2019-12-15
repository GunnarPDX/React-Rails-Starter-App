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
            <div class="comment-box">
                <h5> <div class="comment-title">{post.title}</div> <div class="comment-info">User:</div> {post.user_id}
                    <div className="comment-info"> Created At: </div> {post.created_at} </h5>
                <br/>
                {post.content}
            </div>
        </div>
      )
    })
  };

  render() {
    return (
      <div>
          <h2>Main Discussion (PostList Component)</h2>
          {this.renderPosts()}
          <br/>
          <Link to="/posts/new">
              <div className="new-post-button">
                  Add a New Post
              </div>
          </Link>
          <br/>
          <br/>
      </div>
    )
  }
}

export default PostList
