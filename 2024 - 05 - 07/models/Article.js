// Task 3
import { Schema,model } from "mongoose";

const commentsSchema = new Schema({
    text:{
        type:String
    },
    user:{
        type:String
    }
},{
    // property "id" will not be added to "comment" subdocuments
    _id:false
})

const articleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
        unique:true
        // with "unique" prop-ty "author" can't be duplicated(should be different from that we already have in collection)
    },
    keywords:{
        type:[String],
        default:[]
    },
    category:{
        type:String,
    },
    comments:[commentsSchema]
},{
    // versionKey will not be added to "article" documents
    versionKey:false
})

const Article = model("article", articleSchema);

export default Article;