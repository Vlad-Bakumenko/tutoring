// Task 4
import User from "../models/User.js"

export const showAllUsers = async (req,res) => {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
}

export const addUser = async (req,res)=>{
    try {
        const userToAdd = await User.create(req.body);
        //? create()
        // The create() method is used to create and insert a new document into the collection. If the document already exists, it will throw an error.
        //? save()
        // The save() method is used to save a new document or update an existing document in the collection. If the document does not exist in the collection, it will be inserted. If the document already exists, it will be updated.
        // const userToAdd = new User(req.body);
        // await userToAdd.save()
        //? insertMany 
        // The insertMany() method is used to insert multiple documents into the collection at once.
        res.status(200).send(`${userToAdd.firstName} is successfully added`);
    } catch (error) {
        console.log(error);
    }
}