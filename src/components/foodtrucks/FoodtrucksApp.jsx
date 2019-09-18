import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import AuthenticationService from './AuthenticationService.js'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import BrowseTrucksComponent from './BrowseTrucksComponent.jsx'
import TruckProfileComponent from './TruckProfileComponent.jsx'
import ListTrucksComponent from './ListTrucksComponent.jsx'
import ListEventsComponent from './ListEventsComponent.jsx' 
// import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import TruckComponent from './TruckComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx' 
// import TestUpdateComponent from './TestUpdateComponent.jsx' 
 
class FoodtrucksApp extends Component {
    
    constructor(props){ 
        super(props)
        this.state = { 
            data : "Hello!"
        }
 
    }
 
    state = { 
        mes: "" 
    }
    
    callbackFunction = (childData) => {
      this.setState({mes: childData})
      this.setState({data: childData})
    }
 
    // componentDidUpdate(prevState) { 
    //     if (this.state.data !== prevState.data) {
    //         this.fetchData(this.props.data);
    //         this.setState({data: "new"})
    //       }
    //     console.log("App did update")
    // }

    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
 
        return (
            
            <div className="FoodtrucksApp"> 
                <Router>
                    <>  
                        {/* <HeaderComponent dataFromParent={this.state.data} parentCallback={this.callbackFunction}  />
                        <TestUpdateComponent dataFromParent={this.state.data} parentCallback={this.callbackFunction} test="1" /> */}
                        <Switch test="switch">
                        <Route path="/" exact component={ListEventsComponent}  dataFromParent={this.state.data} parentCallback={this.callbackFunction} test="3" />
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/trucks/:id" component={TruckComponent}/>
                        <Route path="/browse" component={BrowseTrucksComponent}/>
                        <Route path="/truck_profile" component={TruckProfileComponent}/>
                        <Route path="/events" component={ListEventsComponent}  />
                        <Route path="/trucks" component={ListTrucksComponent}/>  
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                        </Switch> 
                        
                        <FooterComponent/>

                        {/* <HeaderComponent testFromParent={testUpdate} parentCallback = {this.callbackFunction}  /> */}

                    </>
                </Router> 
            </div>
            
            // <div className="FoodtrucksApp"> 
            //     <Router>
            //         <>  
            //             {/* <HeaderComponent testFromParent={testUpdate} parentCallback = {this.callbackFunction}  /> */}
            //             <HeaderComponent dataFromParent={this.state.data} parentCallback={this.callbackFunction}  />
            //             <TestUpdateComponent dataFromParent={this.state.data} parentCallback={this.callbackFunction} test="1" />
            //             <Switch test="switch">
            //             {/* <Route path="/" exact component={LoginComponent}/> */}
            //             <Route path="/" exact component={ListEventsComponent}  dataFromParent={this.state.data} parentCallback={this.callbackFunction} test="3" />
            //             <Route path="/login" component={LoginComponent}/>
            //             <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
            //             <AuthenticatedRoute path="/trucks/:id" component={TruckComponent}/>
            //             <Route path="/browse" component={BrowseTrucksComponent}/>
            //             <Route path="/truck_profile" component={TruckProfileComponent}/>
            //             {/* <Route path="/owner/my-profile" component={OwnerProfileComponent}/> */}
            //             <Route path="/events" component={ListEventsComponent}  />
            //             <Route path="/trucks" component={ListTrucksComponent}/> 
            //             <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
            //             <Route component={ErrorComponent}/>
            //             </Switch> 
            //             <FooterComponent/>
                        
            //         </>
            //     </Router> 
            // </div>
        )
    }
}

export default FoodtrucksApp