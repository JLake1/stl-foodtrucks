package edu.launchcode.foodtrucks.truck;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TruckJpaRepository extends JpaRepository<Truck, Long> {
    List<Truck> findByUsername(String username);
}
