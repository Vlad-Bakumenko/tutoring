//? MVC

// Model–view–controller (MVC) is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. These elements are :

// the model, the internal representations of information

// the view, the interface that presents information to and accepts it from the user

// the controller, the software linking the two.

//? ODM

// An Object-Document Mapper (ODM) is a tool(library) that allows you to interact with your MongoDB database using JavaScript objects.

//? Mongoose

// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

// 1) git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env"

// This command is used to remove a file called .env from the Git repository's history. Here's a breakdown of the command:

// git filter-branch: This is a Git command used to rewrite Git history. It's often used to remove sensitive information, like passwords or API keys, from a repository's history.
// --index-filter: This option specifies that the filter should be applied to the index (i.e., the staging area) rather than the working directory.
// "git rm -rf --cached --ignore-unmatch .env": This is the command that's actually doing the work. git rm is a Git command used to remove files from the index. The -rf options tell Git to remove the file recursively and forcefully, even if it doesn't exist in the working directory. The --cached option tells Git to remove the file from the index but leave it in the working directory. Finally, --ignore-unmatch tells Git to ignore files that don't exist in the index.
// So, putting it all together, the command git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" will remove the .env file from the Git repository's history. 

// 2) git push -f

// git push: This is a Git command used to push changes from a local repository to a remote repository.
// -f: This option tells Git to forcefully push the changes, even if it would overwrite changes made by others. This is a potentially dangerous option, as it can cause data loss if used improperly.

import express from 'express';
import mongoose from 'mongoose';
import messageRouter from './routers/messageRouter.js';
import { errorHandler } from './middleware/globalErrorHandler.js';

const app = express();

app.use(express.json());

try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('connected to database');
} catch (error) {
    console.log(error.message);
    console.log('connection failed');
}

app.use("/message", messageRouter);

app.listen(3003, ()=>{
    console.log('server is listening to port 3003');
})

app.use(errorHandler);