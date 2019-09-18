import React, {Component} from 'react' 
import TruckDataService from '../../api/foodtrucks/TruckDataService.js' 
import HeaderComponent from './HeaderComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYelp } from '@fortawesome/free-brands-svg-icons'

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
        TruckDataService.retrieveTruckProfile(truckId)
          .then(
              response => { 
                  this.setState({
                    //   truckName : response.data.truckName
                    truck : response.data
                    })  
                //   this.setState({message : `Display of username ${username} Successful`})
              }
          ) 
    }

    render() { 
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper truck-profile-component">
                {/* {this.props.history.location.pathname} */}
                <h1>{this.state.truck.truckName}</h1>
                <img src={this.state.truck.imgUrl} />
                <h4>{this.state.truck.categories}</h4>
                <div className="social-icons">
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faYelp} />
                    </a>
                    <a href="#" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>              
                </div>
                
            </div>
            </div>
        )
    }
}

export default TruckProfileComponent