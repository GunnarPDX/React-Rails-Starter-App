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


    render() {
        return (
            <div class="nav-bar">
                <nav>
                    <ul>
                        <li><Link to={'/'} onClick={this.handleLogout} className="Logout">Sign Out</Link></li>
                        <li><Link to={'/'} className="nav-link">Home</Link></li>
                        <li><Link to={'/posts/new'} className="nav-link">New Post</Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                        <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;