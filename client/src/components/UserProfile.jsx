import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserProfile extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        fetch('/api/v1/profile')
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
                    <div className="comment-box">
                        <h5>
                            <div className="comment-title">{post.title}</div>
                            <div className="comment-info"> Created At:</div>
                            {post.created_at} </h5>
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
                <h2>My Posts (Profile Component)</h2>
                {this.renderPosts()}
                <br/>
            </div>
        )
    }
}

export default UserProfile