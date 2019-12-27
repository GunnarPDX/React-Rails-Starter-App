import React, { Component } from 'react'

class DestroyPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post_id: this.props.post_id
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let post_id = this.props.post_id;
        console.log('post id:' + post_id);
        let token = document.querySelector('meta[name="csrf-token"]').content;
        fetch('/api/v1/posts/' + post_id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-Token': token
            },
            redirect: "error"
        })
            .then(res => res.text())
            .then(res => console.log(res))
            .then(res => {
                this.props.history.push('/')
            });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleClick}>Delete</button>
            </div>
        )
    }

}
export default DestroyPost