import React, {Component} from 'react';
import EventDataService from '../../api/foodtrucks/EventDataService.js';
import AuthenticationService, { USER_NAME_SESSION_ATTRIBUTE_NAME } from './AuthenticationService.js'; 
import HeaderComponent from './HeaderComponent';

class ListEventsComponent extends Component {    
    constructor(props){ 
        super(props);
        this.state = {
            events : [],
            message : null,
            todaysDate: ''
        };
    }

   componentDidMount() { 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1 ; 
        month = month.toString();
        if (month.length == 1) {
            month = '0' + month;
        };
        var year = new Date().getFullYear();
        year = year.toString().substr(-2);
        var todaysDate = month + '-' + date + '-' + year;
        todaysDate = todaysDate.toString(); 

        this.refreshEvents(); 
        let username = "user";
        EventDataService.retrieveAllEvents(username)
          .then(
              response => { 
                  this.setState({events : response.data}); 
                  this.setState({username : `${username}`});
                  this.setState({todaysDate : `${todaysDate}`});
              }
          );     
    }

    refreshEvents() {
        let username = "user";
        EventDataService.retrieveAllEvents(username)
          .then(
              response => { 
                  this.setState({events : response.data})
              }
          ); 
    }
    
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let todaysDate = this.state.todaysDate; 

        return (
            <div>
            <HeaderComponent></HeaderComponent> 
            
            <div className="wrapper list-events-component">
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <div className="row"> 
                    <div className="col-sm-12 owner-content">
                    <h1>Today's Trucks {this.state.eventDate}</h1>  
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>  
                                <th colspan="2">Truck</th> 
                                <th className="event-truckAddress-col">Address</th>
                                <th>Time</th>
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
                                        <td className="event-address-cell"><a href={"https://www.google.com/search?q=" + event.eventAddress + " " + event.eventCity} >{event.eventAddress}<br />{event.eventCity}</a></td>
                                        <td>{event.startTime} - {event.endTime}</td>
                                    </>) : (<></>)
                                    } 
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

export default ListEventsComponent;