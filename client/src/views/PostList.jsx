import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentPrompt from '../components/CommentPrompt'

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

                      <h5>
                          <div class="orange-info">By: {post.user.username} </div>
                          At: {post.time}
                      </h5>

                      <h4>
                          <div className="bold-title"> {post.title} </div>
                      </h4>

                      <br/>
                      {post.content}

                  </div>

                  <CommentPrompt post_id={post.id}/>

                  {this.renderComments(post)}

              </div>
          )
      })
  };

  renderComments = (post) => {
      return post.comments.map(comment => {
          return (
              <div key={comment.id}>

                  <div class="comment-box">
                      <div className="orange-info">By: {comment.user_name}</div>
                      <br/>
                      {comment.content}
                  </div>

              </div>
          )
      })
  };

  render() {
      return (
          <div>
              <h2>
                  Main Discussion (PostList Component)
              </h2>

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
