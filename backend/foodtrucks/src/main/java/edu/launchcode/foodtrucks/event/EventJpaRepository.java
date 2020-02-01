package edu.launchcode.foodtrucks.event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventJpaRepository extends JpaRepository<Event, Long> {
    List<Event> findByUsername(String username);
}
