import Message from "../models/message.js";

export const getMessages = async (req,res,next) => {
    try {
        const messages = await Message.find();
        // if (messages.length === 0) {
        if (!messages.length) {    
            res.status(404).send("no messages found")
        } else {
            res.status(200).json(messages);
        }
    } catch (error) {
        next(error);
    }
}

export const addMessage = async (req,res,next) => {
    try {
        const newMessage = await Message.create(req.body);
        res.status(200).send(`message from ${newMessage.nickname} is added`)
    } catch (error) {
        next(error)
    }
}

export const getMsgById = async (req,res,next) => {
    try {
        const requiredMsg = await Message.findById(req.params.id);
        // console.log(req.params); // { id: '6633d6ee23066315dcf65d33' }
        if (!requiredMsg) {
            res.status(404).send("no messages found");
        } else {
            res.status(200).json(requiredMsg);
        }
    } catch (error) {
        next(error);
    }
}