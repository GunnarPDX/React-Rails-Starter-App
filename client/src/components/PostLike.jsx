import React, { Component } from 'react'

class PostLike extends Component {

    submitLike(props) {
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

    submitUnlike(props) {
        let post_id = this.props.post_id;
        let token = document.querySelector('meta[name="csrf-token"]').content;
        fetch('/api/v1/posts/unlike/' + post_id, {
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
                <form onSubmit={this.submitLike.bind(this)}>

                    <input type="submit" value="Like"/>

                </form>
                <form onSubmit={this.submitUnlike.bind(this)}>

                    <input type="submit" value="Unlike"/>

                </form>
            </div>
        )
    }

}
export default PostLike