import express from 'express';
import registerRouter from './routes/register.js';
import loginRouter from './routes/login.js';
import albumsRouter from './routes/albums.js';

const app = express();

//? Controllers, middleware

// controllers - primarily handle request logic and return responses
// middleware - performs additional tasks during the request-response cycle

//? express.Router

// Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system. 

//? Purpose

// It allows us to group the route handlers for a particular part of a site together and access them using a common route-prefix. 

// app.get("/cats", (req,res)=>{})
// app.post("/cats", (req,res)=>{})
// app.patch("/cats", (req,res)=>{})
// app.delete("/cats", (req,res)=>{})
// app.get("/cats/:id", (req,res)=>{})
// app.post("/cats/:id", (req,res)=>{})


app.use(express.json());

app.use("/register", registerRouter);

//? app.use("/register", registerRouter) 
// is a middleware registration function that mounts the registerRouter router at the /register path of the application.

// When a request is made to the /register path of the application, the registerRouter router will be invoked to handle the request. Any routes that are defined in the registerRouter router will be relative to the /register path.

//? import-export issue

// If you have a named export in your module, you can reassign the imported variable to a new value, but this will not affect the original module.

app.use("/login", loginRouter);

app.use("/albums", albumsRouter);

app.listen(5005, ()=>{
    console.log('server is running on http://localhost:5005');
})

app.use(function errorHandler(err, req, res, next) {
    res.status(err.status || 400).send({
        error:{
            message:err.message,
            status:err.status
        }
    })
})