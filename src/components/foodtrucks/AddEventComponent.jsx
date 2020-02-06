import React, {Component} from 'react' 
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'  
import TruckDataService from '../../api/foodtrucks/TruckDataService.js' 
import EventDataService from '../../api/foodtrucks/EventDataService.js' 
import HeaderComponent from './HeaderComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYelp } from '@fortawesome/free-brands-svg-icons'
import AuthenticationService from './AuthenticationService.js'

class AddEventComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truck : "", 
            trucks : [], 
            id: this.props.match.params.id
        }
 
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {
        var truckUrl = this.props.history.location.pathname
        var truckId = truckUrl.replace("/add-event/", "")
        this.state.id = truckId
        console.log(this.state.id)

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
        let username = 'user'
 
        console.log(this.state.truck.truckName)

        let event = { 
                truckName: this.state.truck.truckName,
                imgUrl: this.state.truck.imgUrl,
                // 
                id: '222',
                startTime: '1:00pm',
                endTime: '2:00pm', 
                eventDate: '2-5-20',
                eventAddress: values.eventAddress,
                eventCity: values.eventCity,
                imgUrl: this.state.truck.imgUrl, 
                truckId: this.state.truck.id, 
                username: 'user'

        }
        console.log(event)
 
        if (event) { 
            console.log("IF", values)
            EventDataService.updateEvent(username, this.state.id, event)
                .then(
                    () => { this.props.history.push('/upcoming-events') }
                )
        } else {
            console.log("ELSE")
            EventDataService.createEvent(username, event)
                .then(
                    () => { this.props.history.push('/upcoming-events') }
                )
        }

        
 
    }

    render() { 
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        let id = this.state.truck.id 
        let urlTag = this.state.truck.id
        let description = this.state.truck.truckName
        let {truckName,targetDate, trucks} = this.state
        
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper truck-profile-component"> 
                <h1>Add event <br />{this.state.truck.truckName}</h1>
           
                <div className="container add-form">
                    <Formik
                        // initialValues={{truckName,description,targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    {/* <fieldset>
                                        <label>Truck Name</label>
                                        <Field className="form-control" type="text" name="truckName"/>
                                    </fieldset>                                     */}
                                    <fieldset>
                                        <label>Truck Name</label> 
                                        <Field className="form-control" type="text" name="truckName"/>
                                    </fieldset>
                                    {/* <fieldset>
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset> */}
                                    {/* <fieldset>
                                        <Field className="form-control" type="datetime-local" name="targetDate"/>
                                    </fieldset> */}


                                        

                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
 
                            )
                        }
                    </Formik>
                </div>
     
 
                
            </div>

            </div>
        )
    }
}

export default AddEventComponent