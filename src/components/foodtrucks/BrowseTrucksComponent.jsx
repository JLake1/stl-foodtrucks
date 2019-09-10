import React, {Component} from 'react'
import TruckDataService from '../../api/foodtrucks/TruckDataService.js'
import AuthenticationService from './AuthenticationService.js'
// import imageLoader from './ImageLoader.js'
 
class BrowseTrucksComponent extends Component {
 
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            trucks : [],
            // images : [],
            // message : null,
            // username : '',
            // userType : ''
        }
 
    }

    componentDidMount() {   
        console.log("asdfasdfasdf")
        TruckDataService.retrieveAllTruckProfiles()
          .then(
              response => {
                  console.log(response);
                  this.setState({trucks : response.data})  
              }
          ) 
    }

    render() {
        return (
            <div className="wrapper">
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <div className="row">     
                    <div className="col-sm-12 owner-content">
                  
                        {
                            this.state.trucks.map (    
                                truck =>
                                    <div key={truck.id} className="directory-tile">  
                                        
                                        {/* <h3><a href="#">{truck.id}</a></h3> */}
                                        <h3><a href={"/truck_profile/" + truck.id}>{truck.truckName}</a></h3> 

                                        <a href={"/truck_profile/" + truck.id}><img src={"" + truck.imgUrl} /></a>
                                        <h4>{truck.categories}</h4> 
 
                                    </div>
                            )
                        }
 
 
                    </div>
 
                    </div>
            </div>
            </div>
        )
    }
}

export default BrowseTrucksComponent