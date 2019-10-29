import Axios from "axios";
import { API_URL, JPA_API_URL } from '../../Constants'

class EventDataService {
    retrieveAllEvents() {
        return Axios.get(`${JPA_API_URL}/events`);
        //console.log('executed service')
    }

    // retrieveTruck(name, id) {
    //     return Axios.get(`${JPA_API_URL}/users/${name}/trucks/${id}`);
    //     //console.log('executed service')
    // }

    // createTruck(name, truck) {
    //     return Axios.post(`${JPA_API_URL}/users/${name}/trucks`, truck);
    //     //console.log('executed service')
    // }

    // deleteTruck(name, id) {
    //     return Axios.delete(`${JPA_API_URL}/users/${name}/trucks/${id}`);
    //     //console.log('executed service')
    // }

    // updateTruck(name, id, truck) {
    //     return Axios.put(`${JPA_API_URL}/users/${name}/trucks/${id}`, truck);
    //     //console.log('executed service')
    // }
}

export default new EventDataService();