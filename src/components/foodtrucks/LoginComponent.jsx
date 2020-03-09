import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import HeaderComponent from './HeaderComponent';

class LoginComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userType: '',
            test: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        );
    }

    loginClicked() {
 
        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password, this.state.userType)
        .then((response) => { 
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token, this.state.userType);
            this.props.history.push(`/`);
            
        }).catch( () =>{
            this.setState({showSuccessMessage:false});
            this.setState({hasLoginFailed:true});
        });
    }

    render() {
        return (
            <div>
            <HeaderComponent></HeaderComponent> 
            <div className="wrapper">
                <div className="container">
                    <h1>Login</h1>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}  onChange={this.handleChange}/> 

                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
            </div>
        );
    }
}

export default LoginComponent;