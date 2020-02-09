import React, {Component} from 'react' 
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'  
import TruckDataService from '../../api/foodtrucks/TruckDataService.js' 
import HeaderComponent from './HeaderComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYelp } from '@fortawesome/free-brands-svg-icons'
import AuthenticationService from './AuthenticationService.js'

class TruckProfileComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truck : "", 
            // id : 20002, 
            description : "",
            targetDate : moment(new Date()).format('YYYY-MM-DD') 
        }
 
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {
        var truckUrl = this.props.history.location.pathname
        var truckId = truckUrl.replace("/truck_profile/", "")
        this.state.id = truckId

        TruckDataService.retrieveTruckProfile(truckId)
          .then(
              response => { 
                  this.setState({ 
                    truck : response.data
                    })   
              }
          )  
    }
 
    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()
 
        let truck = {
                id: values.id, 
                description: values.description,
                urlTag: values.urlTag                 
        }
 
        if (truck.id) {  
            TruckDataService.updateTruck(username, truck.id, truck) 
                .then(
                    () => { this.props.history.push('/trucks') }
                )
        }  

 
    }

    render() { 
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        let id = this.state.truck.id 
        let urlTag = this.state.truck.id
        let description = this.state.truck.truckName
        
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper truck-profile-component"> 
                <div className="profile-banner">
                    <h1>{this.state.truck.truckName}</h1>
                    <img src={this.state.truck.imgUrl} />
                </div>

                {isUserLoggedIn &&
                <div className="container add-form">
                    <Formik 
                        initialValues={{id: id,description: description, urlTag: urlTag}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <button type="submit" className="btn btn-success">Add to My Trucks</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
    }

                <a href={"/add-event/" + this.state.truck.id} className="add-event-btn">
                    <button className="btn btn-success">
                        Add Event
                    </button>
                </a>

                <h5>Categories: {this.state.truck.categories}</h5>
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