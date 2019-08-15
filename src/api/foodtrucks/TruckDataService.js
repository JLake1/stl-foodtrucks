import Axios from "axios";
import { API_URL } from '../../Constants'

class TruckDataService {
    retrieveAllTrucks(name) {
        return Axios.get(`${API_URL}/users/${name}/trucks`);
        //console.log('executed service')
    }

    retrieveTruck(name, id) {
        return Axios.get(`${API_URL}/users/${name}/trucks/${id}`);
        //console.log('executed service')
    }

    createTruck(name, truck) {
        return Axios.post(`${API_URL}/users/${name}/trucks`, truck);
        //console.log('executed service')
    }

    deleteTruck(name, id) {
        return Axios.delete(`${API_URL}/users/${name}/trucks/${id}`);
        //console.log('executed service')
    }

    updateTruck(name, id, truck) {
        return Axios.put(`${API_URL}/users/${name}/trucks/${id}`, truck);
        //console.log('executed service')
    }
}

export default new TruckDataService();