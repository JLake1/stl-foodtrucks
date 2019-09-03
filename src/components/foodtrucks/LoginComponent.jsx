import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            userType: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
    }

    loginClicked() {
 
        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password, this.state.userType)
        .then((response) => { 
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token, this.state.userType)
            // this.props.history.push(`/welcome/${this.state.username}`)
            // this.props.history.push(`/trucks/`)
            this.props.history.push(`/events/${this.state.username}`)
        }).catch( () =>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Login</h1>
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}  onChange={this.handleChange}/> 
                    {/* Type: <input type="text" id="owner" name="userType" value={this.state.userType} onChange={this.handleChange} /> */}
                    
           
                    {/* <div><input type="radio" id="owner" name="userType" value={this.state.userType} onChange={this.handleChange} />
                        <label for="owner">Owner</label>
                    </div> */}
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent