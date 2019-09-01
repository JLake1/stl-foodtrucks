package edu.launchcode.foodtrucks.event;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Entity
public class Event {

    @Id
    @GeneratedValue
    private Long id;
    private String truckName;
    private String eventAddress;
    private Date eventTime;
    private Date eventDate;

    protected Event() {

    }

    public Event(long id, String truckName, String eventAddress, Date eventTime, Date eventDate) {
        this.id = id;
        this.truckName = truckName;
        this.eventAddress = eventAddress;
        this.eventTime = eventTime;
        this.eventDate = eventDate;
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

    public String getEventAddress() {
        return eventAddress;
    }

    public void setEventAddress(String eventAddress) {
        this.eventAddress = eventAddress;
    }

    public Date getEventTime() {
        return eventTime;
    }

    public void setEventTime(Date eventTime) {
        this.eventTime = eventTime;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event truck = (Event) o;
        return id == truck.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}