import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ListTrucksComponent from './ListTrucksComponent.jsx'
import OwnerProfileComponent from './OwnerProfileComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import TruckComponent from './TruckComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'

class FoodtrucksApp extends Component {
    render() {
        return (
            <div className="FoodtrucksApp">
                <Router>
                    <>  
                        <HeaderComponent/>
                        <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/trucks/:id" component={TruckComponent}/>
                        <Route path="/owner/my-profile" component={OwnerProfileComponent}/>
                        <Route path="/trucks" component={ListTrucksComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default FoodtrucksApp