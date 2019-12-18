import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {

  state = {
    posts: [], comments: []
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
            <div class="post-box">
                <h5> <div class="post-title">{post.title}</div> <div class="post-info">By:</div> {post.user.username}
                    <div className="post-info"> Created At: </div> {post.time} </h5>
                <br/>
                {post.content}
            </div>

            {post.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <div class="comment-box">
                            {comment.content}
                        </div>
                    </div>
                )
            })}

        </div>
      )
    })
  };

  renderComments = (post) => {
      return this.state.post.comments.map(comment => {
          return (
              <div key={comment.id}>
                  <div class="comment-box">
                      {comment.content}
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
