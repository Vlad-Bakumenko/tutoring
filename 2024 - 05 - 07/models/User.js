// Task 2
import { Schema,model } from "mongoose";

const albumSchema = new Schema({
    title:{
        type:String,
    },
    year:{
        type:Number
    }
})

// //? Subdocuments
// Subdocuments are documents embedded in other documents. In Mongoose, this means you can nest schemas in other schemas. Mongoose has two distinct notions of subdocuments: arrays of subdocuments and single nested subdocuments.

//? Unique
// The unique option tells Mongoose that each document must have a unique value for a given path.

//? Built-in Validators
// Mongoose has several built-in validators.
// All SchemaTypes have the built-in required validator.
// Numbers have min and max validators.
// Strings have enum, match, minLength, and maxLength validators.

//? There are two equivalent ways to set the validator error message:

//                 value,   error message
// Array syntax: min: [6, 'Must be at least 6, got {VALUE}']
// Object syntax: 
// enum: { 
    // values: ['Coffee', 'Tea'], 
    // message: '{VALUE} is not supported' 
// }

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    bands:{
        type:[String],
        default:[]
    },
    instrument: {
        type:String,
        required:true,
        // example of custom error messages (Object Syntax)
        enum:{
            // value
            values: ['guitar', 'drums'],
            // error msg
            message: '{VALUE} is not an instrument'
        }
    },
    albums: [albumSchema],
    birthday:{
        type:String,
        required:true,
        // example of custom error messages (Array Syntax)
        //      value, error msg
        minLength:[10, "{VALUE} is not correct data format"]
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})

const User = model("user", userSchema);

export default User;