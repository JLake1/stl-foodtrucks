package edu.launchcode.foodtrucks.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU2NjQzMTIzOSwiaWF0IjoxNTY1ODI2NDM5fQ.xjVExTwaKWZMFRo3_3obo4NvBbZaPRTrNCwZRh17XYFtvDmqbU68uzKNSQpeNXpCmUmOhqsvjKrI-BbAW2mf9A"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
