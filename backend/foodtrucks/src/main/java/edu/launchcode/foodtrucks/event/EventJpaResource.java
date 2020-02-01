package edu.launchcode.foodtrucks.event;

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

//    @GetMapping("/jpa/events")
//    public List<Event> getAllEvents() {
//        return eventJpaRepository.findAll();
//    }

    @GetMapping("/jpa/users/{username}/events")
    public List<Event> getAllEvents(@PathVariable String username) {
        return eventJpaRepository.findByUsername(username);
    }

    @GetMapping("/jpa/users/{username}/events/{id}")
    public Event getEvent(@PathVariable String username, @PathVariable long id) {
        return eventJpaRepository.findById(id).get();
    }

    @DeleteMapping("/jpa/users/{username}/events/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable String username, @PathVariable long id) {

        eventJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }

    @PutMapping("/jpa/users/{username}/events/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable String username, @PathVariable long id, @RequestBody Event event) {

        event.setUsername(username);
        Event eventUpdated = eventJpaRepository.save(event);
        return new ResponseEntity<Event>(event, HttpStatus.OK);

    }

    @PostMapping("/jpa/users/{username}/events")
    public ResponseEntity<Void> createEvent(@PathVariable String username, @RequestBody Event event) {

        event.setUsername(username);

        Event createdEvent = eventJpaRepository.save(event);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEvent.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }
}
