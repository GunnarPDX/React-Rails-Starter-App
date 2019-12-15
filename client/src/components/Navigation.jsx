import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {

    onLogout = () => {
        document.cookie = 'auth_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }

    render() {
        return (
            <div class="nav-bar">
                <nav>
                    <ul>
                        <li><Link to={'/'} onClick={this.onLogout} className="Logout">Log Out</Link></li>
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