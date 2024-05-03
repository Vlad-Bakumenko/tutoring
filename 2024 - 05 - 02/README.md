# Message Board

- add & find messages into the message board! 

1. in `server.js`, set up an express server listening to port 3003

2. as well, connect to a mongoDB database

    - store your connection string in `.env`
        with adding a database name `task` at the end

    - remember how to access the environment variables stored in `.env`? add a script command in `package.json` with `--env-file=.env`!

    - **note** the connection string(which contains your mongoDB credentials in URI) should not be exposed to public 

3. install mongoose `npm i mongoose` and import it in the step 4

4. in `message.js` in `models` folder, write a `Message` schema and create/export a model based on it 

    Message should require fields below:
        - nickname (string)
        - password (number)
        - message (string)
        - isMember (boolean)

5-1. in `server.js`, ("/message") will be a default route to handle queries related to `messages` collection. 

5-2. in `messageRouter.js` in `routers` folder, define three routes:

    - ("/") GET, get all the messages
        - if the array is empty, return a response "no messages found"

    - ("/") POST, add a message into the database
        and send a response "message from [nickname] is added"

    - ("/:id") GET, get the message with the id received from `req.params`
        - if no message found, return a response "no messages found"

5-3. in `messageController.js` in `controllers` folder, write handler functions for the tasks above. use a global error handler to catch errors

6. test your code with thunder client & mongoDB compass

7. [bonus] add a field `date` into `message` document, based on the current local date & time

    - every time a new message is added, `date` field will be automatically added to the document

    - alternatively, mongoose schemas support a `timestamps` option, research!
