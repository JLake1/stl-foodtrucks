import React, {Component} from 'react'
import EventDataService from '../../api/foodtrucks/EventDataService.js'
import AuthenticationService, { USER_NAME_SESSION_ATTRIBUTE_NAME } from './AuthenticationService.js'
import moment from 'moment'
import { userInfo } from 'os';
import HeaderComponent from './HeaderComponent'

class ListUpcomingEventsComponent extends Component {
    
    constructor(props){ 
        super(props)
        this.state = {
            events : [],
            message : null,
            todaysDate: ''
        }
}

    componentDidMount() { 
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1  
        var year = new Date().getFullYear()
        year = year.toString().substr(-2)
        var todaysDate = month + '-' + date + '-' + year
        var todaysDate = todaysDate.toString() 

        this.refreshEvents() 
        let username = AuthenticationService.getLoggedInUserName()
        EventDataService.retrieveAllEvents(username)
          .then(
              response => { 
                  this.setState({events : response.data}) 
                  this.setState({username : `${username}`})
                  this.setState({todaysDate : `${todaysDate}`})
              }
          )     
    }

    refreshEvents() {
        let username = AuthenticationService.getLoggedInUserName()
        EventDataService.retrieveAllEvents(username)
          .then(
              response => { 
                  this.setState({events : response.data})
              }
          ) 
    }
 
    
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        let todaysDate = this.state.todaysDate 

        return (
            <div>
            <HeaderComponent></HeaderComponent> 
            
            <div className="wrapper list-events-component">
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <div className="row"> 
 

                    <div className="col-sm-12 owner-content">
                    <h1>Upcoming Events</h1>   
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>  
                                <th colspan="2">Truck</th> 
                                <th className="event-truckAddress-col">Address</th>
                                <th>Date</th>
                                <th>Time</th> 
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.events.map (    
                                event =>
                                    <tr key={event.id}>  
                                        <td className="event-truckLogo-cell"><a href={"/truck_profile/" + event.truckId}><img src={event.imgUrl} /></a></td>
                                        <td className="event-truckName-cell"><a href={"/truck_profile/" + event.truckId}>{event.truckName}</a></td> 
                                        <td><a href={"https://www.google.com/search?q=" + event.eventAddress + " " + event.eventCity} >{event.eventAddress}<br />{event.eventCity}</a></td>
                                        <td>{event.eventDate}</td>
                                        <td>{event.startTime} - {event.endTime}</td>
                                        </tr>
                            )
                        }
                        </tbody>
                    </table>
                    </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
}

export default ListUpcomingEventsComponent