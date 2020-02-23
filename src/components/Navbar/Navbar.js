import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import avatar from '../../assets/png/avatar.png';

import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <header className="topbar">
                <nav className="topbar__navigation">
                    <Link to="/items" className="topbar__logo"><img src={logo} /></Link>
                    <div className="nav-middle-space" />
                    <div className="topbar__navigation-items">
                        <ul>
                            <li><a>Explore</a></li>
                            <li><a>Subscriptions</a></li>
                            <li><a>Channels</a></li>
                            <li><img alt="" src={avatar} /></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;