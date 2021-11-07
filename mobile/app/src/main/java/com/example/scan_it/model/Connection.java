package com.example.scan_it.model;

public class Connection {
    int userId;
    int institutionId;

    public Connection(int userID, int institutionId) {
        this.userId = userID;
        this.institutionId = institutionId;
    }

    @Override
    public String toString() {
        return "Connection{" +
                "userId=" + userId +
                ", institutionId=" + institutionId +
                '}';
    }
}
