import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {

    handleLogout = () => {
        const link = document.createElement('a');
        link.setAttribute('href', '/users/sign_out');
        link.setAttribute('rel', 'nofollow');
        link.setAttribute('data-method', 'delete');
        document.body.appendChild(link);
        link.click();
    };

    state = {
        current_user: []
    };

    componentDidMount() {
        fetch('/api/v1/user')
            .then(current_user => current_user.json())
            .then(current_user => {
                this.setState({
                    current_user: current_user
                })
            })
    }

    renderUsername = () => {
        return this.state.current_user.username;
    };

    rightLinkStyle = {
        float: 'right',
    };

    render() {
        return (
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li><Link to={'/'} className="nav-link">Home</Link></li>
                        <li><Link to={'/posts/new'} className="nav-link">New Post</Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>

                        <li style={this.rightLinkStyle}><Link to={'/'} onClick={this.handleLogout} className="Logout">Sign Out</Link></li>
                        <li style={this.rightLinkStyle}><Link to={'/profile'} className="profile">Signed in as.. {this.renderUsername()}</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;