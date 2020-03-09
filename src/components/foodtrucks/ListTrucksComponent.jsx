import React, {Component} from 'react';
import TruckDataService from '../../api/foodtrucks/TruckDataService.js';
import AuthenticationService from './AuthenticationService.js';
import HeaderComponent from './HeaderComponent';
import moment from 'moment';

class ListTrucksComponent extends Component {
    
    constructor(props){ 
        super(props);
        this.state = {
            trucks : [],
            message : null,
            userType : 'owner'
        };
        this.deleteTruckClicked = this.deleteTruckClicked.bind(this);
        this.refreshTrucks = this.refreshTrucks.bind(this);
    }
 
    componentDidMount() { 
        this.refreshTrucks()
    }

    refreshTrucks() {
        let username = AuthenticationService.getLoggedInUserName();
        TruckDataService.retrieveAllTrucks(username)
          .then(
              response => {
                  this.setState({trucks : response.data});
              }
          );
    }

    deleteTruckClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();
        TruckDataService.deleteTruck(username, id)
          .then (
              response => {
                  this.setState({message : `Delete of truck ${id} Successful`});
                  this.refreshTrucks();
              }
          );
    }
    
    render() {
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper">
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <div className="row">     
                    <div className="col-sm-12 owner-content">
                    <h1>My Trucks</h1> 
                    <table className="table table-hover" key="truck.id">
                        <thead className="thead-dark">
                            <tr> 
                                <th>Truck Name</th>  
                                <th>Next Event</th> 
                                <th className="delete-col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.trucks.map (    
                                truck =>
                                    <tr key={truck.id}>
                                        <td><a href={"/truck_profile/" + truck.urlTag}>{truck.description}</a></td>  
                                        <td>{moment(truck.targetDate).format('lll')}</td>   
                                        <td>
                                            <button className="btn delete" onClick={() => this.deleteTruckClicked(truck.id)}><i className="material-icons">cancel</i></button>
                                        </td>
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
        );
    }
}

export default ListTrucksComponent;