import React, {Component} from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TruckDataService from '../../api/foodtrucks/TruckDataService.js';
import HeaderComponent from './HeaderComponent';
import AuthenticationService from './AuthenticationService.js';


class TruckComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            truckName : "",
            description : "",
            targetDate : moment(new Date()).format('YYYY-MM-DD'),
            trucks : []
        };

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() { 
        if(this.state.id === -1) { 
            TruckDataService.retrieveAllTruckProfiles()
                .then(
                    response => {
                        this.setState({trucks : response.data});  
                     }     
                );                
            return;
        }
        
        let username = AuthenticationService.getLoggedInUserName();
        
        TruckDataService.retrieveTruck(username, this.state.id)
            .then(response => this.setState({
                truckName: response.data.truckName,
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            })) 
    }
    
    validate(values) {
        let errors = {};
        if(!values.description) {
            errors.description = 'Enter a description';
        } else if(values.description.length<5) {
            errors.description = 'Description must be at least 5 characters';
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid date'
        }

        return errors
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()
        
        let truck = {
                id: this.state.id,
                truckName: values.truckName,
                description: values.description,
                targetDate: values.targetDate                
        }

        if (this.state.id === -1) {
            TruckDataService.createTruck(username, truck)
                .then(
                    () => { this.props.history.push('/trucks') }
                )
        } else {
            TruckDataService.updateTruck(username, this.state.id, truck)
                .then(
                    () => { this.props.history.push('/trucks') }
                )
        }
 
    }

    render() {
        let {truckName,description,targetDate, trucks} = this.state 
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper">
                <h1>Add Truck</h1>
 

                <div className="container add-form">
                    <Formik
                        initialValues={{truckName,description,targetDate}}
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
                                        <Field className="form-control" type="text" name="description"/>
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

export default TruckComponent