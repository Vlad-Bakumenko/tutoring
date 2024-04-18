# express.Router

Create a new server for an app which lets users keep a record of their favorite music tracks!

## Requirements

### Task 1: Users

- You should first hard code 3 user objects inside the array in `data/usersData.js`. Each user object should have `email`, `password` and `id` (using UUID) properties.
- Create an express server with the following routes:
    - `POST /register` - to register a new user. You should send a JSON object with `email` and `password` properties in the request body. 
        - If successful, a new user object based on the request body (plus a new `id` property) should be added to the array of users. The new user object should be returned in the server's response
    - `POST /login` - to login as an existing user
        - If successful, the user object for the logged in user should be returned in the server's response
- You should implement a global error handling middleware to handle any errors on your routes 
    - Think of at least one error which could happen on each route, and make sure those errors are handled correctly by your global error handling middleware
- Each route should also use a middleware to check if all the necessary properties (`email` and `password`) were included in the request body
- Make sure to structure your project using the following directories:
    - `controllers`
    - `middleware`
    - `routes`
- Test your new routes for both success and error cases using Thunder Client before moving on to Task 2.

---

### Task 2: Albums

- Now hard code 3 album objects inside the array in `data/albumsData.js`. Each album object should have `title`, `artist` `year`, and `id` (using UUID) properties
- Add more routes to your server:
    - `GET /albums` - to GET all the albums 
        - If successful, the full array of albums in `data/albumsData.js` should be returned in the server's response
    - `GET /albums/:id` - to GET a single album 
        - If successful, a single album object with the same `id` as the `:id` param should be returned in the server's response
    - `POST /albums` - to POST a new album to the albums array. You should send a JSON object with `title`, `artist` and `year` properties in the request body 
        - If successful, a new album object based on the request body (plus a new `id` property) should be added to the array of albums. The new album object should be returned in the server's response
- Make sure to think of **at least** one different error which could occur on the `GET /albums/:id` and `POST /album` routes, and handle them using your global error handling middleware
- Keep using the `controllers`, `middleware` and `routes` directories to keep your server modular!
- Test your new routes for both success and error cases using Thunder Client.

---

### Bonus Tasks

If you have any extra time at the end, think of any ways your server could be improved. Another route? Extra error handling in the current routes? Implement your changes, and test them with Thunder Client. :smile: