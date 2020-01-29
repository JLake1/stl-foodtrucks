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
            id : 20002, 
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
                    //   truckName : response.data.truckName
                    truck : response.data
                    })  
                //   this.setState({message : `Display of username ${username} Successful`})
              },
              console.log(this.state.truck.id)
          ) 
          console.log(truckId, this.state.id)
    }

    // Copied from truck component --v 

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()
 
        let truck = {
                id: values.id, 
                description: values.description                 
        }

        console.log(username, truck)

        if (truck.id === -1) {
            TruckDataService.createTruck(username, truck)
            console.log("IF")
                .then(
                    () => { this.props.history.push('/trucks') }
                )
        } else {
            TruckDataService.updateTruck(username, truck.id, truck) 
                .then(
                    () => { this.props.history.push('/trucks') }
                )
        }

 
    }

    // END COPY

    render() { 
        // let {id,description} = this.state 
        let id = this.state.truck.id
        let description = this.state.truck.truckName
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

            <div className="container add-form">
                    <Formik 
                        initialValues={{id: id,description: description}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset>
                                        <label>Truck Name</label> 
                                        {/* <Field className="form-control" type="text" name="description"/> */}
                                    </fieldset>

                                    <fieldset>
                                        <label>Truck Name</label> 
                                        <Field className="form-control" type="hidden" name="id"  />
                                        <Field className="form-control" type="hidden" name="description"  />
                                    </fieldset>
 
                                    <button type="submit" className="btn btn-success">Add Truck</button>
                                </Form>
 
                            )
                        }
                    </Formik>
                </div>

            </div>
        )
    }
}

export default TruckProfileComponent