//? HTTP request methods

// GET, POST, PUT, DELETE, PATCH, HEAD, CONNECT, OPTIONS, TRACE
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

//! GET
// The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

//! POST
// The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

//! DELETE
// The DELETE method deletes the specified resource.

//! PATCH
// The PATCH method applies partial modifications to a resource.

//! PUT
// The PUT method replaces all current representations of the target resource with the request payload.

// app.get('/path', ()=>{res.send()}) // if client send to my server GET request, the response - will be the next
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

//? app.use(express.urlencoded({extended:true})) vs app.use(express.json())

// app.use(express.urlencoded({ extended: true })) is used to parse URL-encoded request bodies. This middleware function parses the request body and makes it available on the req.body object as a JavaScript object. The extended option allows for the parsing of nested objects and arrays, which is not possible with the default false value.

// app.use(express.json()) is used to parse JSON request bodies. JSON request bodies are typically sent by modern web applications using the application/json content type. This middleware function parses the request body and makes it available on the req.body object as a JavaScript object.

// if your client sends data to the server as JSON, you should use express.json() to parse and access that data. If your client sends data using HTML forms or URL-encoded format, you should use express.urlencoded({ extended: true }) to parse and access that data.

// In REST, generally, data is sent in a JSON format or XML(which is outside the scope of this course).
// JSON is the most popular data format - it can be used across many programming languages (not just JS), and is relatively easy to read/understand.

// Task 2
let users = [
    {
        id: uuidv4(),
        name: "Jane Austen",
        status: "I find myself in tolerable health and spirits."
    }
];

// Task 3
app.get("/users", (req,res)=>{ // GET /users
    res.json(users);
})



//? endpoint, route, resource 

// "http://localhost:5000/users" - endpoint - a specific URL that can be requested from a client( More often, an endpoint can point to a resource in our data we want to access or change );

// Resource - is a part of the data being accessed by the API;

// app.get("/users", ...) - route - is the path that the client will use to access that endpoint (pattern that the server uses to map incoming requests to specific handler functions);

// Task 4

app.post("/users", (req,res)=>{ // POST /users
    const {name,status} = req.body;
    const newUser = {
        id: uuidv4(),
        name: name,
        status: status
    }
    users.push(newUser);
    res.json(newUser);
})

// Task 5

app.get("/users/:id", (req,res)=>{
    //                     Data type - Number     String
    const foundUser = users.find(user=>user.id == req.params.id);
    console.log(req.params);
    res.json(foundUser);
})

// Task 6

app.patch("/users/:id", (req,res)=>{
    const foundUser = users.find(user=>user.id == req.params.id);
    const {status} = req.body; // we specify that request body will be the object with property "status"
    foundUser.status = status;
    res.json(foundUser);
})

// Bonus Task

app.delete("/users", (req,res)=>{
    users = [];
    res.json(users);
})

app.delete("/users/:id", (req,res)=>{
    let newUsers = users.filter(user=> user.id != req.params.id); // return new array without the object with id specified in endpoint
    // users = users.filter(user=> user.id != req.params.id); - alternative.
    users = [...newUsers]; // update initial "users" array with filtered array
    res.json(users);
})


app.listen(5000, ()=>{
    console.log('server is running on http://localhost:5000');
})