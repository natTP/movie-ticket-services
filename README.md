# movie-ticket-services

Services for Movie Ticket Booking project.
- __User service__ deals with user CRUD
- __Showtime service__ deals with movie, showtime, and theater CRUD
- __Reservation Service__ deals with reservation CRUD

## Starting the server

1. Create a `.env` file in each subfolder. See `example.env` for details.

2. Run at the root folder to build the 4 containers: `user-service`, `showtime-service`, `reservation-service` and `mongo`.
```
docker-compose up
```

## Additional Info
See project requirements, architecture, schema and planning here: https://thinknet.atlassian.net/l/c/GumVoyHD

### Architecture
![Screen Shot 2565-07-01 at 18 09 00](https://user-images.githubusercontent.com/57129145/176883498-24c46c12-8f20-41da-b1d7-fca576906f09.png)

### Schema
![Screen Shot 2565-07-01 at 18 11 39](https://user-images.githubusercontent.com/57129145/176883801-80e43e37-cce1-474a-9522-248c8addce3e.png)
