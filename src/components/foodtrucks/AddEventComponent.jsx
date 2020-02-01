import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import EventDataService from '../../api/foodtrucks/EventDataService.js'
import HeaderComponent from './HeaderComponent'
import AuthenticationService from './AuthenticationService.js'


class AddEventComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // id : this.props.match.params.id,
            // truckName : ""
            id: 123,
            truckName: 'Test Event'
        }
        this.onSubmit = this.onSubmit.bind(this) 
    }

    componentDidMount() { 
        if(this.state.id === -1) { 
            EventDataService.retrieveAllEventProfiles()
                .then(
                    response => {
                        this.setState({trucks : response.data})  
                     }     
                )            
            return
        }
        
        let username = AuthenticationService.getLoggedInUserName()
        
        EventDataService.retrieveEvent(username, this.state.id)
            .then(response => this.setState({
                truckName: response.data.truckName
            })) 
    }
    
    // validate(values) {
    //     let errors = {}
    //     if(!values.description) {
    //         errors.description = 'Enter a description'
    //     } else if(values.description.length<5) {
    //         errors.description = 'Description must be at least 5 characters'
    //     }

    //     if(!moment(values.targetDate).isValid()) {
    //         errors.targetDate = 'Enter a valid date'
    //     }
    //     return errors
    // }

    onSubmit(values) { 
        let username = 'user'

        let event = {
                id: this.state.id,
                truckName: values.truckName        
        }
        console.log(event)

        if (event.id) { 
            EventDataService.updateEvent(username, event.id, event)
                .then(
                    () => { this.props.history.push('/upcoming-events') }
                )
        }
        // } else {
        //     console.log("ELSE")
        //     EventDataService.updateEvent(username, this.state.id, event)
        //         .then(
        //             () => { this.props.history.push('/upcoming-events') }
        //         )
        // }
 
    }

    render() {
        let id = this.id
        let truckName = this.state 
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper">
                <h1>Add Truck</h1>
 

                <div className="container add-form">
                    <Formik
                        initialValues={{id: id, truckName: truckName}}
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