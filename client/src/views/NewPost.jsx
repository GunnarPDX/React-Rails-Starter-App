import React, { Component } from 'react'

class NewPost extends Component {

  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    let newValue = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: newValue
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {post: this.state};
    let token = document.querySelector('meta[name="csrf-token"]').content;
    fetch('api/v1/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify(this.state)
    })
      .then(resp => {
        resp.json()
      })
      .then(post => {
        this.props.history.push('/');
      });
  };

  contentBoxStyle = {
    width: '90%',
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>New Post</h2>

        <div className="new-post-box">
          <p>
            <label htmlFor="title">Title: </label>
            <br/>
            <input type="text" name="title" onChange={this.handleChange} style={this.contentBoxStyle}/>
          </p>
          <p>
            <label htmlFor="content">Content: </label>
            <br/>
            <textarea name="content" id="" cols="30" rows="10" onChange={this.handleChange} style={this.contentBoxStyle}/>
          </p>
          <input type="submit" value="Create Post" />
        </div>
      </form>
    )
  }
}

export default NewPost