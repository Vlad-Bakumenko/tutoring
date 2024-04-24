# Environment variables in node.js

This project will allow to you practise using environment variables with `process.env` in Node.

## Tasks

Perform the following tasks inside the `server.js` file

### Task 1 - Playing with process.env

1. Inside the file `server.js`, use `console.log` to display the contents of the `process.env` variable
2. Experiment by add the following variables to the `process.env` variable:

```text
SERVER_NAME = 'Papagei 5000'
SERVER_CPU = 'Archimedes MMX'
SERVER_URL = 'http://localhost:5000/'
SERVER_LOG = 'LOG.txt'
```

### Task 2 - Configuring .env

As a software developer, you will have to spend a lot of time reading documentation

- Read https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs
- Read https://nodejs.org/docs/latest/api/process.html#processenv

1. Create the file `.env`
2. Add the values you previously added to `process.env` into the `.env` file
3. Remove the changes you made in your JavaScript file to `process.env`.

- Use `console.log` to print the following message in the console, filling in the values with the values from the `.env` file:

> "Hallo! Ich bin {SERVER_NAME}! Ich habe ein {SERVER_CPU}, und mein URL ist {SERVER_URL}. Ich schreibe alles was passiert zu {SERVER_LOG}"

### Task 3 - .gitignore

If you run the command `git status`, you will notice that `.git` is aware of the `.env` file

We can't allow the `.env` file to be added to git

1. Create the file `.gitignore`
2. Add the name of the file you want to ignore here
3. Run the `git status` command again - you should notice that the `.env` file is no longer there
