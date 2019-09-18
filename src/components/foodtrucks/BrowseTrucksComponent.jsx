import React, {Component} from 'react'
import TruckDataService from '../../api/foodtrucks/TruckDataService.js'
import HeaderComponent from './HeaderComponent'
 
class BrowseTrucksComponent extends Component {
 
    constructor(props){
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
        TruckDataService.retrieveAllTruckProfiles()
          .then(
              response => {
                //   console.log(response);
                  this.setState({trucks : response.data})  
              }
          ) 
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
            </div>
        )
    }
}

export default BrowseTrucksComponent