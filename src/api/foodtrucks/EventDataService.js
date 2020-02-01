import Axios from "axios";
import { API_URL, JPA_API_URL } from '../../Constants'

class EventDataService {
    // retrieveAllEvents() {
    //     return Axios.get(`${JPA_API_URL}/events`);
    //     //console.log('executed service')
    // }

    retrieveAllEvents(name) {
        return Axios.get(`${JPA_API_URL}/users/${name}/events`);
        //console.log('executed service')
    }

    retrieveEvent(name, id) {
        return Axios.get(`${JPA_API_URL}/users/${name}/events/${id}`);
        //console.log('executed service')
    }

    createEvent(name, event) {
        return Axios.post(`${JPA_API_URL}/users/${name}/events`, event);
        //console.log('executed service')
    }

    deleteEvent(name, id) {
        return Axios.delete(`${JPA_API_URL}/users/${name}/events/${id}`);
        //console.log('executed service')
    }

    updateEvent(name, id, event) {
        return Axios.put(`${JPA_API_URL}/users/${name}/events/${id}`, event);
        //console.log('executed service')
    }
}

export default new EventDataService();