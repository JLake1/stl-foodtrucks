import Axios from "axios";

class HelloWorldService {
    
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello-world')
        //console.log('executed service')
    };

    executeHelloWorldBeanService() {
        return Axios.get('http://localhost:8080/hello-world-bean')
        //console.log('executed service')
    };

    executeHelloWorldPathVariableService(name) {
        // let username = 'usernameOwner'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // , 
        //     {
        //         headers : {
        //             authorization: basicAuthHeader
        //         }
        //     }
        );
 

        //console.log('executed service')
    };
};

export default new HelloWorldService();