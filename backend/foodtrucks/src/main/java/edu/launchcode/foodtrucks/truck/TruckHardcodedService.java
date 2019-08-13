package edu.launchcode.foodtrucks.truck;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TruckHardcodedService {

    private static List<Truck> trucks = new ArrayList();
    private static int idCounter = 0;

    static {
        trucks.add(new Truck(++idCounter, "JoeL123", "Mike's Pizza", new Date(), false));
        trucks.add(new Truck(++idCounter, "JoeL123", "Sandwich Hut", new Date(), false));
        trucks.add(new Truck(++idCounter, "JoeL123", "Tacorama", new Date(), false));
        trucks.add(new Truck(++idCounter, "JoeL123", "Sample Truck", new Date(), false));

    }

    public List<Truck> findAll() {
        return trucks;
    }

    public Truck save(Truck truck) {
        if(truck.getId()==-1 || truck.getId()==0) {
            truck.setId(++idCounter);
            trucks.add(truck);
        } else {
            deleteById(truck.getId());
            trucks.add(truck);
        }
        return truck;
    }

    public Truck deleteById(long id) {
        Truck truck = findById(id);

        if(truck == null) {
            return null;
        }

        if(trucks.remove(truck)) {
            return truck;
        }

        return null;
    }

    public Truck findById(long id) {
        for(Truck truck:trucks) {
            if(truck.getId() == id) {
                return truck;
            }
        }

        return null;
    }

}
