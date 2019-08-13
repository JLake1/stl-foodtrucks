package edu.launchcode.foodtrucks.truck;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TruckResource {

    @Autowired
    private TruckHardcodedService truckService;

    @GetMapping("/users/{username}/trucks")
    public List<Truck> getAllTrucks(@PathVariable String username) {
        return truckService.findAll();
    }

    @GetMapping("/users/{username}/trucks/{id}")
    public Truck getTruck(@PathVariable String username, @PathVariable long id) {
        return truckService.findById(id);
    }

    @DeleteMapping("/users/{username}/trucks/{id}")
    public ResponseEntity<Void> deleteTruck(@PathVariable String username, @PathVariable long id) {

        Truck truck = truckService.deleteById(id);

        if (truck != null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/trucks/{id}")
    public ResponseEntity<Truck> updateTruck(@PathVariable String username, @PathVariable long id, @RequestBody Truck truck) {

        Truck truckUpdated = truckService.save(truck);
        return new ResponseEntity<Truck>(truck, HttpStatus.OK);

    }

    @PostMapping("/users/{username}/trucks")
    public ResponseEntity<Void> updateTruck(@PathVariable String username, @RequestBody Truck truck) {

        Truck createdTruck = truckService.save(truck);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTruck.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }
}
