package edu.launchcode.foodtrucks.event;
import edu.launchcode.foodtrucks.event.Event;
import edu.launchcode.foodtrucks.event.EventJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EventJpaResource {


    @Autowired
    private EventJpaRepository eventJpaRepository;

    @GetMapping("/jpa/events")
    public List<Event> getAllEvents() {
        return eventJpaRepository.findAll();
    }

    @GetMapping("/jpa/events/{username}")
    public List<Event> getOwnerEvents(@PathVariable String username) {
        return eventJpaRepository.findByTruckName(username);
    }
//
//    @GetMapping("/jpa/users/{username}/trucks/{id}")
//    public Truck getTruck(@PathVariable String username, @PathVariable long id) {
//        return truckJpaRepository.findById(id).get();
//    }
//
//    @DeleteMapping("/jpa/users/{username}/trucks/{id}")
//    public ResponseEntity<Void> deleteTruck(@PathVariable String username, @PathVariable long id) {
//
//        truckJpaRepository.deleteById(id);
//
//        return ResponseEntity.noContent().build();
//
//    }
//
//    @PutMapping("/jpa/users/{username}/trucks/{id}")
//    public ResponseEntity<Truck> updateTruck(@PathVariable String username, @PathVariable long id, @RequestBody Truck truck) {
//
//
//        truck.setUsername(username);
//
//        Truck truckUpdated = truckJpaRepository.save(truck);
//
//        return new ResponseEntity<Truck>(truck, HttpStatus.OK);
//
//    }
//
//    @PostMapping("/jpa/users/{username}/trucks")
//    public ResponseEntity<Void> createTruck(@PathVariable String username, @RequestBody Truck truck) {
//
//        truck.setUsername(username);
//
//        Truck createdTruck = truckJpaRepository.save(truck);
//
//        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTruck.getId()).toUri();
//
//        return ResponseEntity.created(uri).build();
//
//    }
}
