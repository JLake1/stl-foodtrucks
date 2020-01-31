import React, {Component} from 'react'
import EventDataService from '../../api/foodtrucks/EventDataService.js'
import AuthenticationService, { USER_NAME_SESSION_ATTRIBUTE_NAME } from './AuthenticationService.js'
import moment from 'moment'
import { userInfo } from 'os';
import HeaderComponent from './HeaderComponent'

class ListEventsComponent extends Component {
    
    constructor(props){ 
        super(props)
        this.state = {
            events : [],
            message : null,
            todaysDate: ''
         
        }
 

        // this.deleteEventClicked = this.deleteEventClicked.bind(this)
        // this.updateEventClicked = this.updateEventClicked.bind(this)
        // this.addEventClicked = this.addEventClicked.bind(this)
        // this.refreshEvents = this.refreshEvents.bind(this)
    }

   

    sendData = () => {
            // this.props.parentCallback();
            // console.log(this.props.parentCallback, "abc")
       }
 
    componentDidMount() { 

        // this.sendData()
 
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

    deleteEventClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        EventDataService.deleteEvent(username, id)
          .then (
              response => {
                  this.setState({message : `Delete of event ${id} Successful`})
                  this.refreshEvents()
              }
          )
    }

    updateEventClicked(id) {
        this.props.history.push(`/events/`)      
    }

    addEventClicked(id) {
        this.props.history.push(`/Events/-1`)  
    }
    
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        let todaysDate = this.state.todaysDate 

        return (
            <div>
            <HeaderComponent></HeaderComponent> 
            
            <div className="wrapper list-events-component">
                 {/* {this.props.dataFromParent} */}
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <div className="row"> 
 

                    <div className="col-sm-12 owner-content">
                    <h1>Today's Trucks {this.state.eventDate}</h1>  
                    <h6>{this.state.todaysDate}</h6>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>  
                                <th colspan="2">Truck</th> 
                                <th className="event-truckAddress-col">Address</th>
                                <th>Time</th>
                                {/* <th>Date</th> */}
                                {/* <th>Update</th>
                                <th>Delete</th> */}
                                {/* <th className="delete-col"></th> */}
                                 
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.events.map (    
                                event =>
                                    <tr key={event.id}>  
                                    {event.eventDate == todaysDate ? (<>

                                         
                                        <td className="event-truckLogo-cell"><a href={"/truck_profile/" + event.truckId}><img src={event.imgUrl} /></a></td>
                                        <td className="event-truckName-cell"><a href={"/truck_profile/" + event.truckId}>{event.truckName}</a></td> 
                                        <td><a href={"https://www.google.com/search?q=" + event.eventAddress + " " + event.eventCity} >{event.eventAddress}<br />{event.eventCity}</a></td>
                                        <td>{event.startTime} - {event.endTime}</td>
                                        {/* <td>{event.eventDate}</td>   */}
                                        {/* <td>{start time} - {end time}</td> */}
                                        {/* <td>{moment(event.eventDate).format('lll')}</td>  */}
                                        {/* <td><button className="btn update" onClick={() => this.updateEventClicked(event.id)}>Update</button></td> */}
                                        {/* <td><button className="btn update" onClick={() => this.Event(event.id)}><i class="material-icons-outlined">edit</i></button></td> */}
                                        {/* <td>
                                        <button className="btn update" onClick={() => this.updateEventClicked(event.id)}><i class="material-icons">edit</i></button>
                                            <button className="btn delete" onClick={() => this.deleteEventClicked(event.id)}><i class="material-icons">cancel</i></button>
                                        </td> */}
                                    </>) : (<></>)
                                    } 
                                    </tr>
                                    
                            )
                        }
                        </tbody>
                    </table>
                    <div class="add ">
                    {isUserLoggedIn && <button className="btn btn-success" onClick={this.addEventClicked}>Add Event</button>}
                    </div>
                    </div>
                    {/* end main content section */}
                    {/* sidebar */}
                    {/* <div className="col-sm-2 owner-sidebar">
                        <h3>Sidebar</h3>
                    </div> */}
                    </div>
            </div>
            </div>
            </div>
        )
    }
}

export default ListEventsComponent