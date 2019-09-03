import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import EventDataService from '../../api/foodtrucks/EventDataService.js'
import profile from '../../assets/img/profile-icon.png'

class HeaderComponent extends Component {

    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            events : [],
            message : null,
            username : '',
            userType : ''
        }
 
    }

    componentDidMount() {
        console.log('component did mount')
        this.refreshEvents() 
        let username = AuthenticationService.getLoggedInUserName()
        EventDataService.retrieveAllEvents(username)
          .then(
              response => {
                  //console.log(response);
                  this.setState({events : response.data}) 
                  this.setState({username : `${username}`})
                //   this.setState({message : `Display of username ${username} Successful`})
                //   console.log(username)
              }
          ) 
    }

    refreshEvents() {
        let username = AuthenticationService.getLoggedInUserName()
        EventDataService.retrieveAllEvents(username)
          .then(
              response => {
                  //console.log(response);
                  this.setState({events : response.data})
                  console.log(username)
              }
          ) 
    }

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
                    <div className="row">

                        <div className="col-sm-4">
                        <ul className="navbar-nav">
                            
                            {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/usernameOwner">Home</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/trucks">Trucks</Link></li>}
                            <li><Link className="nav-link" to="/browse">Browse</Link></li>
                            {isUserLoggedIn && <li><Link className="nav-link" to="/events">Events</Link></li>}

                            {/* TODO: add 'isOwnerLoggedIn' */}
                            {/* {isUserLoggedIn && <li><Link className="nav-link" to="/owner/my-profile">My Profile</Link></li>} */}
                        </ul>
                        </div>
                        
                        <div className="col-sm-4 branding-col">
                        <a href="/" className="navbar-brand">STL FOODTRUCKS</a>
                        </div>

                        <div className="col-sm-4">
                        <ul className="navbar-nav login"> 
                            {isUserLoggedIn && <li className="header-user"><Link className="nav-link" to="#"><img src={profile} /> Welcome {this.state.username}</Link></li>}
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