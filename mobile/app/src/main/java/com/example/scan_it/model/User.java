package com.example.scan_it.model;

public class User {
    int id;
    String firstName;
    String lastName;
    String phoneNumber;
    String password;


    public User(String firstName, String lastName, String phoneNumber, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

}
