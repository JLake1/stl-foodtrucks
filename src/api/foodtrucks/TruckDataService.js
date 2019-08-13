import Axios from "axios";

class TruckDataService {
    retrieveAllTrucks(name) {
        return Axios.get(`http://localhost:8080/users/${name}/trucks`);
        //console.log('executed service')
    }

    retrieveTruck(name, id) {
        return Axios.get(`http://localhost:8080/users/${name}/trucks/${id}`);
        //console.log('executed service')
    }

    createTruck(name, truck) {
        return Axios.post(`http://localhost:8080/users/${name}/trucks`, truck);
        //console.log('executed service')
    }

    deleteTruck(name, id) {
        return Axios.delete(`http://localhost:8080/users/${name}/trucks/${id}`);
        //console.log('executed service')
    }

    updateTruck(name, id, truck) {
        return Axios.put(`http://localhost:8080/users/${name}/trucks/${id}`, truck);
        //console.log('executed service')
    }
}

export default new TruckDataService();