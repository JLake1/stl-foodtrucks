import React, {Component} from 'react'
import moment from 'moment' 
import TruckDataService from '../../api/foodtrucks/TruckDataService.js'
import AuthenticationService from './AuthenticationService.js'


class TruckProfileComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truck : ""
            // truckName : "",
            // id : this.props.match.params.id,
            // truckName : "",
            // description : "",
            // targetDate : moment(new Date()).format('YYYY-MM-DD') 
        }
 

    }

    componentDidMount() {
        var truckUrl = this.props.history.location.pathname
        var truckId = truckUrl.replace("/truck_profile/", "");
        console.log("truck Id= " + truckId)
        TruckDataService.retrieveTruckProfile(truckId)
          .then(
              response => {
                  console.log(response); 
                  this.setState({
                    //   truckName : response.data.truckName
                    truck : response.data
                    })  
                //   this.setState({message : `Display of username ${username} Successful`})
                  console.log("")
              }
          ) 
    }

    render() { 
        return (
            <div className="wrapper">
                {/* {this.props.history.location.pathname} */}
                <h1>{this.state.truck.truckName}</h1>
                <p>{this.state.truck.categories}</p>
                <img src={this.state.truck.imgUrl} />
                
            </div>
        )
    }
}

export default TruckProfileComponent