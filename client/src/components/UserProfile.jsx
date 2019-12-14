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
                    <br/>
                    {post.title} - {post.content}
                    <br/>
                </div>
            )
        })
    };

    render() {
        return (
            <div>
                Profile Component
                {this.renderPosts()}
                <br/>
            </div>
        )
    }
}

export default UserProfile