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
            message : null,
            username : '',
            userType : ''
        }
 
    }

    componentDidMount() {   
        // const images = imageLoader()
        // this.setState({images})
        TruckDataService.retrieveTruckDirectory()
          .then(
              response => {
                  //console.log(response);
                  this.setState({trucks : response.data})  
                //   this.setState({message : `Display of username ${username} Successful`})
                //   console.log(username)
              }
          ) 
    }

 

    render() {
        return (
            <div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <div className="row">     
                    <div className="col-sm-12 owner-content">
                    {/* <h1>Browse Trucks</h1>  */}
 
                        {
                            this.state.trucks.map (    
                                truck =>
                                    <div key={truck.id} className="directory-tile">  
                                        
                                        <h3><a href="#">{truck.id}</a></h3>
                                        <p>{truck.truckName}</p>

                                        <img src={"aefasdf/" + truck.imgUrl} />  
 
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