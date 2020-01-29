import React, {Component} from 'react'
import TruckDataService from '../../api/foodtrucks/TruckDataService.js'
import AuthenticationService from './AuthenticationService.js'
import HeaderComponent from './HeaderComponent'
import moment from 'moment'
import { userInfo } from 'os';

class ListTrucksComponent extends Component {
    
    constructor(props){ 
        super(props)
        this.state = {
            trucks : [],
            message : null,
            userType : 'owner'
        }

        this.deleteTruckClicked = this.deleteTruckClicked.bind(this)
        this.updateTruckClicked = this.updateTruckClicked.bind(this)
        this.addTruckClicked = this.addTruckClicked.bind(this)
        this.refreshTrucks = this.refreshTrucks.bind(this)
    }
 
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('should component update')
        // console.log(nextProps)
        // console.log(nextState)
        return true
    }

    componentDidMount() { 
        this.refreshTrucks()
        // console.log(this.state)
    }

    refreshTrucks() {
        let username = AuthenticationService.getLoggedInUserName()
        TruckDataService.retrieveAllTrucks(username)
          .then(
              response => {
                  //console.log(response);
                  this.setState({trucks : response.data})
              }
          ) 
    }

    deleteTruckClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        // console.log(id + " " + username);
        TruckDataService.deleteTruck(username, id)
          .then (
              response => {
                  this.setState({message : `Delete of truck ${id} Successful`})
                  this.refreshTrucks()
              }
          )
    }

    updateTruckClicked(id) {
        console.log('update' + id)  
        this.props.history.push(`/trucks/${id}`)      
        // let username = AuthenticationService.getLoggedInUserName()
        // // console.log(id + " " + username);
        // TruckDataService.deleteTruck(username, id)
        //   .then (
        //       response => {
        //           this.setState({message : `Delete of truck ${id} Successful`})
        //           this.refreshTrucks()
        //       }
        //   )
    }

    addTruckClicked(id) {
        this.props.history.push(`/trucks/-1`)  
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
                    
                    {/* <p>{this.state.userType && <div>{this.state.userType}</div>}</p> */}
                    <table className="table table-hover" key="truck.id">
                        <thead className="thead-dark">
                            <tr> 
                                <th>Truck Name</th>  
                                <th>Next Event</th> 
                                {/* <th>Update</th>
                                <th>Delete</th> */}
                                <th className="delete-col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.trucks.map (    
                                truck =>
                                    <tr key={truck.id}>  
                                        {console.log(truck, truck.id)}
                                        <td><a href={"/truck_profile/" + truck.id}>{truck.description}</a></td>  
                                        <td>{moment(truck.targetDate).format('lll')}</td>   
                                        {/* <td><button className="btn update" onClick={() => this.updateTruckClicked(truck.id)}>Update</button></td> */}
                                        {/* <td><button className="btn update" onClick={() => this.updateTruckClicked(truck.id)}><i class="material-icons-outlined">edit</i></button></td> */}
                                        <td>
                                        <button className="btn update" onClick={() => this.updateTruckClicked(truck.id)}><i className="material-icons">edit</i></button>
                                            <button className="btn delete" onClick={() => this.deleteTruckClicked(truck.id)}><i className="material-icons">cancel</i></button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="add ">
                        <button className="btn btn-success" onClick={this.addTruckClicked}>Add Truck</button>
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

export default ListTrucksComponent