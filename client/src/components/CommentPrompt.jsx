import React, { Component } from 'react'

class CommentPrompt extends Component {

    state = {
        content: '',
        post_id: '',
    };

    handleChange = e => {
        let newValue = e.target.value;
        let key = e.target.name;
        this.setState({
            [key]: newValue,
            post_id: this.props.post_id
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {post: this.state};
        let token = document.querySelector('meta[name="csrf-token"]').content;
        fetch('api/v1/comments', {
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
                window.location.reload(false); {/* This should call function to update props in parent instead */}
            });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <div className="new-post-box">

                    <p>

                        <textarea name="content" rows="5" onChange={this.handleChange} className="text-area"/>

                    </p>

                    <input type="submit" value="Create Post" />

                </div>

            </form>
        )
    }

}
export default CommentPrompt