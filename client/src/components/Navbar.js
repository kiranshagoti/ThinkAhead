import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    state = {
        showMenu: false
    }
    showMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }
    render() {
        const displayed = {
            width: '300px',
            height: '400px',
            left: '0',
            transitionDuration: '0.5s'
        }
        const hide = {
            width: '300px',
            height: '400px',
            marginLeft: '-400px',
            transitionDuration: '0.5s'
        }
        return (
            <div>
                {this.state.showMenu ? <button onClick={this.showMenu}>HIDE</button> : <button onClick={this.showMenu}>SHOW</button>}
            <div style={this.state.showMenu ? displayed : hide}>
              <nav className="nav-style">
                    <ul>
                        <li><Link to ="/profile">PROFILE</Link></li>
                        <li><Link to ="/about">ABOUT</Link></li>
                        <li><Link to ="/explore">EXPLORE</Link></li>
                        <li><Link to ="/share-funeral-plans">SHARE FUNERAL PLANS</Link></li>
                        <li><Link to ="/legal">LEGAL</Link></li>
                        <li><Link to ="/invite-friends">INVITE FRIENDS</Link></li>
                        <li><Link to ="/settings">SETTINGS</Link></li>
                        <li><Link to ="/logout">LOGOUT</Link></li>
                </ul>
                </nav>
                </div>
            </div >
        )
    }
}

