import React, {Component} from 'react'; 
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TruckDataService from '../../api/foodtrucks/TruckDataService.js';
import EventDataService from '../../api/foodtrucks/EventDataService.js';
import HeaderComponent from './HeaderComponent';
import AuthenticationService from './AuthenticationService.js';

class AddEventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            truck : "", 
            trucks : [], 
            id: this.props.match.params.id
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        var truckUrl = this.props.history.location.pathname;
        var truckId = truckUrl.replace("/add-event/", "");
        this.state.id = truckId;

        TruckDataService.retrieveTruckProfile(truckId)
          .then(
              response => { 
                  this.setState({ 
                    truck : response.data
                    })   
              }
          ); 
    }

    validate(values) {
        let errors = {};
        
        if(!values.street) {
            errors.street = 'Enter a street address';
        } else if(values.street.length<5) {
            errors.street = 'Address must be at least 5 characters';
        }

        if(!values.startTime) { 
            errors.startTime = 'Enter a start time';
            console.log(errors.startTime)
        }

        if(!values.endTime) { 
            errors.endTime = 'Enter an end time';
        }

        if(!values.eventDate) { 
            errors.eventDate = 'Enter a valid date';
        }
 
        return errors
    }
 
    onSubmit(values) { 
        let username = 'user';
        let date = values.eventDate.slice(5);
        let year = values.eventDate.slice(2,4);
        let eventDate = date + '-' + year;
        let amPm = "am";

        let eventStartHour = values.startTime.slice(0,2);
        eventStartHour = parseInt(eventStartHour);
        let eventStartMin = values.startTime.slice(3,5);

        let eventEndHour = values.endTime.slice(0,2);
        eventEndHour = parseInt(eventEndHour);
        let eventEndMin = values.endTime.slice(3,5);

        if (eventStartHour > 12) {
            eventStartHour = eventStartHour - 12;
            amPm = "pm";
        }         
        let startTime = eventStartHour.toString() + ":" + eventStartMin + amPm;

        if (eventEndHour > 12) {
            eventEndHour = eventEndHour - 12;
            amPm = "pm";
        }      
        let endTime = eventEndHour.toString() + ":" + eventEndMin + amPm;

        let event = { 
                truckName: this.state.truck.truckName,
                imgUrl: this.state.truck.imgUrl, 
                startTime: startTime,
                endTime: endTime, 
                eventDate: eventDate,
                eventAddress: values.street,
                eventCity: "St. Louis, MO",
                imgUrl: this.state.truck.imgUrl, 
                truckId: this.state.truck.id, 
                username: 'user' 
        };

        if (event) { 
            EventDataService.updateEvent(username, this.state.id, event)
                .then(
                    () => { this.props.history.push('/upcoming-events') }
                );
        } 
    }

    render() { 
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let {street, startTime, endTime, eventDate} = this.state; 
        
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper truck-profile-component"> 
                <h1>Add Event <br />{this.state.truck.truckName}</h1>
           
                <div className="container add-form">
                    <Formik
                        initialValues={{street, startTime, endTime, eventDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset>
                                        <label>Street Address</label> 
                                        <Field className="form-control" type="text" name="street"/>
                                        <ErrorMessage name="street" component="div" className="alert alert-danger" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Start Time</label> 
                                        <Field className="form-control" type="time" name="startTime"/>
                                        <ErrorMessage name="startTime" component="div" className="alert alert-danger" />
                                    </fieldset>

                                    <fieldset>
                                        <label>End Time</label> 
                                        <Field className="form-control" type="time" name="endTime"/>
                                        <ErrorMessage name="endTime" component="div" className="alert alert-danger" />
                                    </fieldset>

                                    <fieldset>
                                        <label>Date</label> 
                                        <Field className="form-control" type="date" name="eventDate"/>
                                        <ErrorMessage name="eventDate" component="div" className="alert alert-danger" />
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
 
                            )
                        }
                    </Formik>
                </div>             
            </div>
            </div>
        );
    }
}

export default AddEventComponent;