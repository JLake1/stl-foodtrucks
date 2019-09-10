package edu.launchcode.foodtrucks.truckProfile;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TruckProfileJpaRepository extends JpaRepository<TruckProfile, Long> {
    List<TruckProfile> findByTruckName(String truckName);
}
