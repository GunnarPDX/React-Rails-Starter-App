import React, { Component } from 'react'

class DestroyComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner_id: this.props.owner_id,
            session_user_id: this.props.session_user_id,
            comment_id: this.props.comment_id
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let comment_id = this.props.comment_id;
        console.log('comment id:' + comment_id);
        let token = document.querySelector('meta[name="csrf-token"]').content;
        fetch('/api/v1/comments/' + comment_id, {
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
                window.location.reload(false); {/* This should call function to update props in parent instead */}
            });
    }

    render() {
        console.log('owner: ' + this.state.owner_id + ' user: ' + this.state.session_user_id);
        if(this.state.owner_id === this.state.session_user_id) {
            return (
                <div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Delete</button>
                </div>
            )
        }
        else{
            return null
        }
    }

}
export default DestroyComment