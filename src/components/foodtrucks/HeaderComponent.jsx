import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import EventDataService from '../../api/foodtrucks/EventDataService.js';
import profile from '../../assets/img/profile-icon.png';

class HeaderComponent extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            events : [],
            message : null 
        };
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
     }
 
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
 
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="row">
                    
                        <div className="col-sm-5">
                        <ul className="navbar-nav"> 
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            {isUserLoggedIn && <li><Link className="nav-link" to="/trucks">My Trucks</Link></li>}
                            <li><Link className="nav-link" to="/browse">Browse</Link></li>
                            <li><Link className="nav-link" to="/upcoming-events">Upcoming Events</Link></li>     
                        </ul>
                        </div>
                        
                        <div className="col-sm-2 branding-col">
                        <a href="/" className="navbar-brand">STL FOODTRUCKS</a>
                        </div>

                        <div className="col-sm-5">
                        <ul className="navbar-nav login"> 
                            {isUserLoggedIn && <li className="header-user"><Link className="nav-link" to="#"><img src={profile} /> Welcome {this.state.username}</Link></li>}
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;