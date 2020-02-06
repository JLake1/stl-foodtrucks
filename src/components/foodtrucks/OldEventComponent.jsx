import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TruckDataService from '../../api/foodtrucks/TruckDataService.js'
import EventDataService from '../../api/foodtrucks/EventDataService.js'
import HeaderComponent from './HeaderComponent' 
import AuthenticationService from './AuthenticationService.js'

class AddEventComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truck : "",
            trucks : [],
            // id : this.props.match.params.id,
            // truckName : ""
            // id: 123,
            // truckName: 'Test Event'
        }
        this.onSubmit = this.onSubmit.bind(this) 
    }

     componentDidMount() { 

        TruckDataService.retrieveAllTruckProfiles()
          .then(
              response => {
                  this.setState({trucks : response.data})  
              }
          ) 

        // TruckDataService.retrieveTruckProfile(20001)
        //   .then(
        //       response => { 
        //           this.setState({ 
        //             truck : response.data
        //             }) 
        //       }
        //   )
    //     if(this.state.id === -1) { 
    //         EventDataService.retrieveAllEventProfiles()
    //             .then(
    //                 response => {
    //                     this.setState({trucks : response.data})  
    //                  }     
    //             )            
    //         return
    //     }
        
    //     let username = AuthenticationService.getLoggedInUserName()
        
    //     EventDataService.retrieveEvent(username, this.state.id)
    //         .then(response => this.setState({
    //             truckName: response.data.truckName
    //         })) 
    // }
    
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
     }

    onSubmit(values) { 
        let username = 'user'
 

        TruckDataService.retrieveTruckProfile(values.id)
          .then(
              response => { 
                  this.setState({ 
                    truck : response.data   
                    })   
              }
          )

        console.log(this.state.truck.truckName)

        let event = {
                // id: this.state.truck.id,
                // truckName: this.state.truck.truckName,
                // imgUrl: this.state.truck.imgUrl,
                // eventAddress: values.eventAddress
                id: 30,
                endTime: "2:00pm",
                eventAddress: "222 Main Stret" ,
                // eventCity: "STL",
                // eventDate: "2-5-20",
                // imgUrl: "image url",
                // startTime: "234234",
                // // truckId: 123,
                // truckName: "Nw2132123 c",
                username: "user" 

        }

        console.log(event)
 
 
        if (event.id) { 
            console.log("IF")
            EventDataService.updateEvent(username, event.id, event)
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
        let id = this.id
        let truckName = this.state  
        return (
            <div>
            <HeaderComponent></HeaderComponent> 

            <div className="wrapper">
                <h1>Add Truck</h1>
 

                <div className="container add-form">
                    <Formik
                        // initialValues={{id: id, truckName: truckName}}
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
                                        <select name="truckName" >
                                        {this.state.trucks.map (    
                                            truck =>
                                                <option key={truck.id} >  
                                                {truck.truckName}  
                                                </option>
                                        )
                                        }
                                        </select>
                                    </fieldset>

                                    <fieldset>
                                        <label>Id</label> 
                                        <Field className="form-control" type="text" name="id"/>
                                    </fieldset>
                                    <fieldset>
                                        <label>Address</label> 
                                        <Field className="form-control" type="text" name="eventAddress"/>
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