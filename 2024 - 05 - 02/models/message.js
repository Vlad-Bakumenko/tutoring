import { Schema, model } from "mongoose";

//? Schema

// A Mongoose schema is a document data structure (or shape of the document) that is enforced via the application layer.

//? SchemaTypes
// While Mongoose schemas define the overall structure or shape of a document, SchemaTypes define the expected data type for individual fields.The following Schema Types are permitted:

// -Array
// -Boolean
// -Buffer
// -Date
// -Mixed (A generic / flexible data type)
// -Number
// -ObjectId
// -String

// You can also pass in useful options like required to make a field non-optional, default to set a default value for the field, and many more.

const messageSchema = new Schema({
    nickname:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    isMember:{
        type:Boolean,
        require:true
    }
     ////date:{
    //     type:Date,
    //     default:Date.now()
    // }
}, 
{
    timestamps:{
        createdAt:"date",
        updatedAt:false
    }
})

//? Models
// Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.

//? Mongoose Schema vs. Model
// A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

//            <name of collection> <name of schema>
const Message = model("message", messageSchema);

export default Message;