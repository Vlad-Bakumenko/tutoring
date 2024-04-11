![alt text](https://www.w3schools.com/whatis/img_ajax.gif)

# A simple server in Express.js
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


This project will allow you to practice setting up a server that will handle simple GET requests in Express.js.

## What you will be doing

You will be setting up a server with four **endpoints** using the Express.js framework.

The endpoints will only respond to **GET** requests, and send a **string** as a response.

## Tasks

### Task 1 - Getting ready

1. Install the express.js npm package `npm i express`
2. Create the file `server.js`

### Task 2 - Setting up your server

Use the following code to setup your server

```js
import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});

export { server }; // This is required for CodeBuddy
```

### Task 3 - GET '/hello'

Create an endpoint that will respond to the path `/hello`

- It should send a **response** with a string. Use the following string;

```text
Hello to you too!
```

### Task 4 - GET '/time'

Create an endpoint that will respond to the path `/time`.

- It should return a `response` with the current time and date

> Research:
>
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> [Date Object [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Task 5 - GET '/random'

Create an endpoint that will respond to the path `/random`.

- It should send a **response** with a random number between 1 and 100 (both inclusive)

> Research:
>
> [Math.random() [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Task 6 - GET '/fact'

Create an endpoint that will respond to the path `/fact`.

- It should send a **response** with a string. Use the following string;

```text
JavaScript was created in about 10 days!
```

### [Challenge] Task 7 - GET '/isNumber/:number'
- Creat an endpoint that will respond to the path '/isNumber/:number', which takes a dynamic input from params 
- It should check whether the given input is number or not