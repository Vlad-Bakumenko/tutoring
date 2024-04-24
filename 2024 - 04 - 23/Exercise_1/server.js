//? Environment variables

// In the context of Node. js, environment variables provide a way to store and manage configurations, such as API keys, database credentials, and other settings, outside of your code. Accessing these variables throughout your application code becomes straightforward with the process.

//? Where stored environment variables?

// process.env

//? Process Object

// The process object in Node.js is a global object that can be accessed inside any module without requiring it. There are very few global objects or properties provided in Node.js and process is one of them. It is an essential component in the Node.js ecosystem as it provides various information sets about the runtime of a program.

console.log(process.env);
// console.log(process.argv);
// console.log(process.version);

//? How to make data secure?

// 1) Declare it in .env file;
// 2) Add .env file to .gitignore;


// Task 1
// process.env.SERVER_NAME = 'Papagei 5000';
// process.env.SERVER_CPU = 'Archimedes MMX';
// process.env.SERVER_URL = 'http://localhost:5000/';
// process.env.SERVER_LOG = 'LOG.txt';

console.log(process.env);

// Task 2

console.log(`Hallo! Ich bin ${process.env.SERVER_NAME}! Ich habe ein ${process.env.SERVER_CPU}, und mein URL ist ${process.env.SERVER_URL}. Ich schreibe alles was passiert zu ${process.env.SERVER_LOG}`);

//? node --watch --env-file=.env server.js

// The command node --watch --env-file=.env server.js does the following:

// It starts a Node.js server with the server.js file.
// It uses the --watch flag to automatically restart the server when changes are detected in the current directory.
// It sets environment variables using the --env-file flag with a .env file. (This tells Node.js to load the environment variables from the .env file before running the server.js)

// Task 3

// Created .gitignore and add .env there

// Andres question:
console.log(`${process.env.server_name} ${process.env.server_cpu}`);
// But better stick to conventional way of writing SERVER_NAME