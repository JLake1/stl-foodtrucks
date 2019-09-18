import axios from 'axios'
import {API_URL} from '../../Constants'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    // executeBasicAuthenticationService(username, password) {
    //     return axios.get('http://localhost:8080/basicauth', 
    //         {headers: {authorization: this.createBasicAuthToken(username,password)}})
    // }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    // createBasicAuthToken(username,password) {
    //     return 'Basic ' +  window.btoa(username + ":" + password)
    // }

    // registerSuccessfulLogin(username,password){
    //     sessionStorage.setItem('USER_NAME_SESSION_ATTRIBUTE_NAME', username)
    //     this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    // }

    registerSuccessfulLoginForJwt(username,token,userType) {
        sessionStorage.setItem('USER_NAME_SESSION_ATTRIBUTE_NAME', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
        sessionStorage.setItem('USERTYPE', userType)
    }

    registerUserType(userType) {
        sessionStorage.setItem('USER_NAME_SESSION_ATTRIBUTE_TYPE', userType)
    }

    createJWTToken(token) {
        return 'Bearer ' +  token
    }


    logout() {
        sessionStorage.removeItem('USER_NAME_SESSION_ATTRIBUTE_NAME');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('USER_NAME_SESSION_ATTRIBUTE_NAME')
        if(user===null) return false
        return true

        // const token = sessionStorage.getItem('USER_NAME_SESSION_ATTRIBUTE_NAME') 
        // console.log(token, "this is the token")
        
        // return token?true:false
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('USER_NAME_SESSION_ATTRIBUTE_NAME')
        if(user===null) return ''
        return user
    }

    getLoggedInTruckName() {
        let truckName = sessionStorage.getItem('USER_NAME_SESSION_ATTRIBUTE_NAME')
        if(truckName===null) return ''
        return truckName
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()