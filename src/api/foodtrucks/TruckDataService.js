import Axios from "axios";
import { API_URL, JPA_API_URL } from '../../Constants'

class TruckDataService {
    retrieveAllTrucks(name) {
        return Axios.get(`${JPA_API_URL}/users/${name}/trucks`);
        //console.log('executed service')
    }

    retrieveTruck(name, id) {
        return Axios.get(`${JPA_API_URL}/users/${name}/trucks/${id}`);
        //console.log('executed service')
    }

    retrieveAllTruckProfiles() {
        return Axios.get(`${JPA_API_URL}/truck_profile/`);
    }

    retrieveTruckProfile(id) {
        return Axios.get(`${JPA_API_URL}/truck_profile/${id}`);
    }

    createTruck(name, truck) {
        return Axios.post(`${JPA_API_URL}/users/${name}/trucks`, truck);
        //console.log('executed service')
    }

    deleteTruck(name, id) {
        return Axios.delete(`${JPA_API_URL}/users/${name}/trucks/${id}`);
        //console.log('executed service')
    }

    updateTruck(name, id, truck) {
        return Axios.put(`${JPA_API_URL}/users/${name}/trucks/${id}`, truck);
        //console.log('executed service')
    }
}

export default new TruckDataService();