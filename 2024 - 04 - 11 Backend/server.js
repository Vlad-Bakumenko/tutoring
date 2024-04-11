//? Server

// A server is a software or hardware offering a service to a user, usually referred to as client.

//? A hardware server

// It is a shared computer on a network, usually powerful and housed in a data center.

//? A software server (often running on a hardware server)

// It is a program that provides services to client programs or a user interface to human clients.

//? How server works

// Services are provided generally over local area networks or wide area networks such as the internet. A client program and server program traditionally connect by passing messages encoded using a protocol over an API(Application Programming Interface).

//? Expressjs

// Express is a minimal and flexible Node.js web application framework.

//? Framework vs Library

// Both the framework vs library is precoded support programs to develop complex software applications. However, libraries target a specific functionality, while a framework tries to provide everything required to develop a complete application.

//? Why do we need to use ExpressJS?
// It helps Node to handling routes, requests, and responses, making it easier for you to create robust and scalable applications.

//? Steps to use ExpressJS

// Step 1. 'npm init -y' - we got 'package.json' file
// Step 2. 'npm i express'
// Step 3. 'type':'module' in 'package.json'
// Step 4. Create server.js
// Step 5. import express from 'express'
import express from "express";
// Step 6. const app = express();

const app = express();

// The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module.

//The app object has methods for

// - Routing HTTP requests; see for example, app.METHOD and app.param.
// - Configuring middleware; see app.route.
// - Rendering HTML views; see app.render.
// - Registering a template engine; see app.engine.

//? Routing
// Routing refers to how an application’s endpoints (URIs -  Uniform Resource Identifiers) respond to client requests.
//- localhost: It refers to the hostname or the current device you are using for development purposes.
// - 4000: It is the port number on which the created development server is configured to listen.
// Summary - What does localhost 4000 mean?
// Localhost:4000 is a default port used by the web servers. It is a local development server that runs on port 4000.

//? Port
// A port number is always associated with a network address of a host, such as an IP address, and the type of transport protocol used for communication. It completes the destination or origination address of a message. Specific port numbers are reserved to identify specific services so that an arriving packet can be easily forwarded to a running application. For this purpose, port numbers lower than 1024 identify the historically most commonly used services and are called the well-known port numbers. Higher-numbered ports are available for general use by applications and are known as ephemeral ports.

// https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports

//? How to define routes?

// You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests.

//? How routing is working?

// The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

//! Task 3

//? The req object

// represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In Express documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.

//? The res object
// represents the HTTP response that an Express app sends when it gets an HTTP request.

app.get("/hello", (req, res) => {
  //? res.send()
  // Sends the HTTP response.
  // The body parameter can be a Buffer object, a String, an object, Boolean, or an Array.
  res.send("Hello to you too!");
});

//! Task 4

app.get("/time", (req, res) => {
  res.send(new Date().toISOString());
});

//! Task 5

app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.send(`${randomNum}`);
});

//! Task 6
// Syntax - 1          2
app.get("/fact", (req, res) => {
  res.send("JavaScript was created in about 10 days!");
});
// 1 - endpoint
// 2 - callback function
// Callback functions; can be:
// A middleware function.
// A series of middleware functions (separated by commas).
// An array of middleware functions.
// A combination of all of the above.

//! Task 7

app.get("/isNumber/:number", (req, res) => {
  //? req.params
  // This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /isNumber/:number, then the "number" property is available as req.params.number.
  const input = Number(req.params.number); // converting into number (result - number or NaN)
  console.log(req.params);
  console.log(input);
  if (!isNaN(input)) { // if input is not NaN (not a number)
    res.send('Input is number')
  } else {
    res.send('Input is not a number')
  }
});

// Step 7.
const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});

export { server };

//? app.listen

// Binds and listens for connections on the specified host and port.
// The app.listen() method returns an http.Server object
