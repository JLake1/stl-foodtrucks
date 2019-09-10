package edu.launchcode.foodtrucks.truckProfile;

import edu.launchcode.foodtrucks.truck.Truck;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TruckProfileHardcodedService {

    private static List<TruckProfile> truckProfiles = new ArrayList();
    private static long idCounter = 0;

    static {

    }

    public List<TruckProfile> findAll() {
        return truckProfiles;
    }

    public TruckProfile findById(long id) {
        for(TruckProfile truckProfile:truckProfiles) {
            if(truckProfile.getId() == id) {
                return truckProfile;
            }
        }

        return null;
    }

}
