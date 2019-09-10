package edu.launchcode.foodtrucks.truckProfile;

import edu.launchcode.foodtrucks.truck.Truck;
import edu.launchcode.foodtrucks.truck.TruckHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TruckProfileResource {

    @Autowired
    private TruckProfileHardcodedService truckProfileService;

    @GetMapping("/truck_profile")
    public List<TruckProfile> getAllTrucks() {
        return truckProfileService.findAll();
    }

//    @GetMapping("/truck_profile/{id}")
//    public TruckProfile getTruckProfile(@PathVariable long id) {
//        return truckProfileService.findById(id);
//    }


}
