import React, {Component} from 'react'
import EventDataService from '../../api/foodtrucks/EventDataService.js'
import AuthenticationService, { USER_NAME_SESSION_ATTRIBUTE_NAME } from './AuthenticationService.js'
// import importAllImages from './ImageLoader.js'
import moment from 'moment'
import { userInfo } from 'os';

class ListEventsComponent extends Component {
    
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            events : [],
            message : null,
            username : '',
            userType : ''
        }

        // this.deleteEventClicked = this.deleteEventClicked.bind(this)
        // this.updateEventClicked = this.updateEventClicked.bind(this)
        // this.addEventClicked = this.addEventClicked.bind(this)
        // this.refreshEvents = this.refreshEvents.bind(this)
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should component update')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    // componentDidMount() {
    //     console.log('component did mount')
    //     this.refreshEvents() 
    // }

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

    deleteEventClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        // console.log(id + " " + username);
        EventDataService.deleteEvent(username, id)
          .then (
              response => {
                  this.setState({message : `Delete of event ${id} Successful`})
                  this.refreshEvents()
              }
          )
    }

    updateEventClicked(id) {
        console.log('update' + id)  
        this.props.history.push(`/events/`)      
        // let username = AuthenticationService.getLoggedInUserName()
        // // console.log(id + " " + username);
        // EventDataService.deleteEvent(username, id)
        //   .then (
        //       response => {
        //           this.setState({message : `Delete of Event ${id} Successful`})
        //           this.refreshEvents()
        //       }
        //   )
    }

    addEventClicked(id) {
        this.props.history.push(`/Events/-1`)  
    }
    
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedIn)
        return (
            <div className="wrapper">
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <div className="row">     
                    <div className="col-sm-12 owner-content">
                    <h1>Today's Events {this.state.eventDate}</h1>  
                    {/* {this.state.username}
                    <p>{this.state.username && <p>{this.state.username}</p>}</p>
                    <div>{JSON.stringify(USER_NAME_SESSION_ATTRIBUTE_NAME)}</div>  */}
                    {/* <div>{JSON.stringify(USERTYPE)}</div>  */} 
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>  
                                <th colSpan="2">Truck</th> 
                                <th className="event-truckAddress-col">Address</th>
                                <th>Time</th>
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
                                        <td className="event-truckLogo-cell"><img src={event.imgUrl} /></td>
                                        <td className="event-truckName-cell"><a href={"/truck_profile/" + event.truckId}>{event.truckName}</a></td> 
                                        <td><a href={"https://www.google.com/search?q=" + event.eventAddress + " " + event.eventCity} >{event.eventAddress}<br />{event.eventCity}</a></td>
                                        <td>{event.startTime} - {event.endTime}</td>
                                        {/* <td>{start time} - {end time}</td> */}
                                        {/* <td>{moment(event.eventDate).format('lll')}</td>  */}
                                        {/* <td><button className="btn update" onClick={() => this.updateEventClicked(event.id)}>Update</button></td> */}
                                        {/* <td><button className="btn update" onClick={() => this.Event(event.id)}><i class="material-icons-outlined">edit</i></button></td> */}
                                        {/* <td>
                                        <button className="btn update" onClick={() => this.updateEventClicked(event.id)}><i class="material-icons">edit</i></button>
                                            <button className="btn delete" onClick={() => this.deleteEventClicked(event.id)}><i class="material-icons">cancel</i></button>
                                        </td> */}
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
        )
    }
}

export default ListEventsComponent