// import React, {Component} from 'react'
// import TruckDataService from '../../api/foodtrucks/TruckDataService.js'
// import AuthenticationService from './AuthenticationService.js'
// import moment from 'moment'

// class OwnerProfileComponent extends Component {
    
//     constructor(props){
//         console.log('constructor')
//         super(props)
//         this.state = {
//             trucks : [],
//             message : null
//         }

//         this.deleteTruckClicked = this.deleteTruckClicked.bind(this)
//         this.updateTruckClicked = this.updateTruckClicked.bind(this)
//         this.addTruckClicked = this.addTruckClicked.bind(this)
//         this.refreshTrucks = this.refreshTrucks.bind(this)
//     }

//     componentWillUnmount() {
//         console.log('component will unmount')
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('should component update')
//         console.log(nextProps)
//         console.log(nextState)
//         return true
//     }

//     componentDidMount() {
//         console.log('component did mount')
//         this.refreshTrucks()
//         console.log(this.state)
//     }

//     refreshTrucks() {
//         let username = AuthenticationService.getLoggedInUserName()
//         TruckDataService.retrieveAllTrucks(username)
//           .then(
//               response => {
//                   //console.log(response);
//                   this.setState({trucks : response.data})
//               }
//           ) 
//     }

//     deleteTruckClicked(id) {
//         let username = AuthenticationService.getLoggedInUserName()
//         // console.log(id + " " + username);
//         TruckDataService.deleteTruck(username, id)
//           .then (
//               response => {
//                   this.setState({message : `Delete of truck ${id} Successful`})
//                   this.refreshTrucks()
//               }
//           )
//     }

//     updateTruckClicked(id) {
//         console.log('update' + id)  
//         this.props.history.push(`/trucks/${id}`)      
//         // let username = AuthenticationService.getLoggedInUserName()
//         // // console.log(id + " " + username);
//         // TruckDataService.deleteTruck(username, id)
//         //   .then (
//         //       response => {
//         //           this.setState({message : `Delete of truck ${id} Successful`})
//         //           this.refreshTrucks()
//         //       }
//         //   )
//     }

//     addTruckClicked(id) {
//         this.props.history.push(`/trucks/-1`)  
//     }
    
//     render() {
//         console.log('render')
//         return (
//             <div>
//                 <h1>My Trucks</h1>
//                 {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
//                 <div className="container"> 
//                     <table className="table">
//                         <thead>
//                             <tr> 
//                                 <th>Truck Name</th> 
//                                 <th>Test Date</th>
//                                 <th>Update</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             this.state.trucks.map (    
//                                 truck =>
//                                     <tr key={truck.id}> 
//                                         <td>{truck.description}</td> 
//                                         <td>{moment(truck.targetDate).format('MM-DD-YY')}</td>   
//                                         {/* <td><button className="btn update" onClick={() => this.updateTruckClicked(truck.id)}>Update</button></td> */}
//                                         <td><button className="btn update" onClick={() => this.updateTruckClicked(truck.id)}><i class="material-icons-outlined">edit</i></button></td>
//                                         <td><button className="btn btn-warning" onClick={() => this.deleteTruckClicked(truck.id)}>Delete</button></td>
//                                     </tr>
//                             )
//                         }
//                         </tbody>
//                     </table>
//                     <div className="row">
//                         <button className="btn btn-success" onClick={this.addTruckClicked}>Add</button>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default OwnerProfileComponent