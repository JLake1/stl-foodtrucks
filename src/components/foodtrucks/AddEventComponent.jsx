import React, {Component} from 'react'; 
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
 
    onSubmit(values) { 
        let username = 'user';
        let date = values.eventDate.slice(5);
        let year = values.eventDate.slice(2,4);
        let eventDate = date + '-' + year;
         
        let event = { 
                truckName: this.state.truck.truckName,
                imgUrl: this.state.truck.imgUrl, 
                startTime: values.startTime,
                endTime: values.endTime, 
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
        
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper truck-profile-component"> 
                <h1>Add Event <br />{this.state.truck.truckName}</h1>
           
                <div className="container add-form">
                    <Formik
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
                                  
                                    <fieldset>
                                        <label>Street Address</label> 
                                        <Field className="form-control" type="text" name="street"/>
                                    </fieldset>
                                    <fieldset>
                                        <label>Start Time</label> 
                                        <Field className="form-control" type="time" name="startTime"/>
                                    </fieldset>

                                    <fieldset>
                                        <label>End Time</label> 
                                        <Field className="form-control" type="time" name="endTime"/>
                                    </fieldset>

                                    <fieldset>
                                        <label>Date</label> 
                                        <Field className="form-control" type="date" name="eventDate"/>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
 
                            )
                        }
                    </Formik>
                </div>             
            </div>
            </div>
        )
    };
}

export default AddEventComponent;