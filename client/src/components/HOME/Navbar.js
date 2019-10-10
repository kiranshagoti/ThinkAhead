
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {logout} from '../../services/api'

export default class Navbar extends Component {
    state = {
        showMenu: false
    }
    showMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }
    handleLogout = (props) => {
        logout().then(() => {
            this.props.setUser(null)
        })
    }

    render() {
        const displayed = {
            // width: '300px',
            // height: '400px',
            backgroundColor:'white',
            left: '0',
            transitionDuration: '0.5s'
        }
        const hide = {
            // width: '300px',
            // height: '400px',
            marginLeft: '-400px',
            transitionDuration: '0.5s'
        }
        return (
            <div className='homeNavbar' style={{position:'absolute'}}>
                {!this.state.showMenu &&  <button onClick={this.showMenu}>SHOW</button>}
            <div style={this.state.showMenu ? displayed : hide}>
                    <button onClick={this.showMenu}>HIDE</button>
                    <nav className="nav-style">
                        <ul>
                        <li><Link to ="/">HOME</Link></li>
                        <li><Link to ="/profile">PROFILE</Link></li>
                        <li><Link to ="/about">ABOUT</Link></li>
                        <li><Link to ="/explore">EXPLORE</Link></li>
                        <li><Link to ="/share-funeral-plans">SHARE FUNERAL PLANS</Link></li>
                        <li><Link to ="/legal">LEGAL</Link></li>
                        
                        <li><Link to ="/settings">SETTINGS</Link></li>
                        <button onClick={(props) => this.handleLogout(props)}>LOGOUT</button>
                </ul>
                </nav>
                </div>
            </div>
        )
    }
}


// const Navbar = () => {
//   return (
//     <nav className="nav-style">
//       <ul>
//       <li>
//           <Link to="/signup">Signup</Link>
//         </li>
//         <li>
//           <Link to="/login">login</Link>
//         </li>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/team">Team</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

