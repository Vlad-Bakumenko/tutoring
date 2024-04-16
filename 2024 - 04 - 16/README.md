# Simple user storage

Create a user storage with routes for listing, creating, updating and deleting users.

## Tasks

### Task 1

- In `index.js`, build a simple server using Express
    - Don't forget to use `npm` to install Express
- For now your server should have no routes, and listen to port 5000
- You may notice at this stage that `package.json` is "accidentally" incomplete. How can you complete it so that you can successfully `import` Express?


### Task 2

- Now create an array of users, which will be stored in memory (remember: this is not good for persisting the data!) 
- Add one user to the array, so that it's not empty to start with. For example:

```js
const users = [
    {
        id: 1,
        name: "Jane Austen",
        status: "I find myself in tolerable health and spirits."
    }
];
```

---
    
**You should use Postman to test your solutions to all the following Tasks, to make sure you are getting the expected results**
    
---

### Task 3

- Make a GET `/users` route that returns the array of users

```json
// Output for GET /users
[
    {
        "id": 1,
        "name": "Jane Austen",
        "status": "I find myself in tolerable health and spirits."
    }
]
```

### Task 4

- Make a POST `/users` route that adds a user object to the `users` array based on the request
- The request should send a JSON object containing values for `name` and `status`
- You should calculate the user's id based on the existing data (e.g. the second user object should have id 2, etc.)
- The request should return the newly created user object, including its id

**Input**
```json
// POST /users
{
    "name": "Daria Morgendorffer",
    "status": "I'm a selectively caring individual."
}
```

**Output**
```json
{
    "id": 2,
    "name": "Daria Morgendorffer",
    "status": "I'm a selectively caring individual."
}
```

### Task 5

- Make a GET `/users/:id` route which returns the user object with the given ID

```json
// Output for GET /users/2
{
    "id": 2,
    "name": "Daria Morgendorffer",
    "status": "I'm a selectively caring individual."
}
```


### Task 6

- Make a PATCH `/users/:id` route
- This should update the chosen user based on the path and the JSON data in the request body

**Input**
```json
// PATCH /users/2
{
    "status": "I'm not antisocial. I just don't like people."
}
```

**Output**
```json
{
    "id": 2,
    "name": "Daria Morgendorffer",
    "status": "I'm not antisocial. I just don't like people."
}
```

---

### Bonus tasks

**If you complete any of the below tasks, keep using Postman to make sure your solution is working as expected**

- Do you remember how to give all your user objects more realistic ids of random, unique, 36-character strings? Do this for all of your current routes! (Research more if you have forgotten...)
- Add a route which **deletes** all users from the `users` array
- Add a route which deletes **one** user object from the `users` array based on their id
- If you still have some time, add any extra routes and/or logic to your server which makes sense to you. Use the extra time to practice and experiment with your server. :smile: