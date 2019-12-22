import React, { Component } from 'react'

class PostLike extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let post_id = this.props.post_id;
        let token = document.querySelector('meta[name="csrf-token"]').content;
        fetch('/api/v1/posts/like/' + post_id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-Token': token
            },
            redirect: "error"
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleClick}>like</button>
            </div>
        )
    }

}
export default PostLike