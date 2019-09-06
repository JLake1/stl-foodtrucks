package edu.launchcode.foodtrucks.directory;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
public class Directory {

    @Id
    @GeneratedValue
    private Long id;
    private String truckName;
    private String categories;
    private String imgUrl;

    protected Directory() {

    }

    public Directory(long id, String truckName, String categories, String imgUrl) {
        this.id = id;
        this.truckName = truckName;
        this.categories = categories;
        this.imgUrl = imgUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTruckName() {
        return truckName;
    }

    public void setTruckName(String truckName) {
        this.truckName = truckName;
    }

    public String getCategories() {
        return categories;
    }

    public void setCategories(String categories) {
        this.categories = categories;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Directory truck = (Directory) o;
        return id == truck.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}