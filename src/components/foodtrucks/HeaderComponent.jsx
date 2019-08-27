import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        //console.log(isUserLoggedIn)

        return (
            // <header>
            //     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            //         <div><a href="/" className="navbar-brand">STL FOODTRUCKS</a></div>
            //         <ul className="navbar-nav">
            //             {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/usernameOwner">Home</Link></li>}
            //             {isUserLoggedIn && <li><Link className="nav-link" to="/trucks">My Events</Link></li>}

            //             {/* TODO: add 'isOwnerLoggedIn' */}
            //             {/* {isUserLoggedIn && <li><Link className="nav-link" to="/owner/my-profile">My Profile</Link></li>} */}
            //         </ul>
            //         <ul className="navbar-nav navbar-collapse justify-content-end">
            //             {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
            //             {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            //         </ul>
            //     </nav>
            // </header>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="row">

                        <div class="col-sm-4">
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/usernameOwner">Home</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/trucks">My Events</Link></li>}

                            {/* TODO: add 'isOwnerLoggedIn' */}
                            {/* {isUserLoggedIn && <li><Link className="nav-link" to="/owner/my-profile">My Profile</Link></li>} */}
                        </ul>
                        </div>
                        
                        <div class="col-sm-4">
                        <a href="/" className="navbar-brand">STL FOODTRUCKS</a>
                        </div>

                        <div class="col-sm-4">
                        <ul className="navbar-nav login">
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                        </div>

                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent