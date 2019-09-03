package edu.launchcode.foodtrucks.directory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DirectoryJpaRepository extends JpaRepository<Directory, Long> {
    List<Directory> findByTruckName(String truckName);
}
