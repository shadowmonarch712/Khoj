import RequestMessage from '../models/requestMessage.js';
import mongoose from 'mongoose';
// const ObjectId = require('mongoose').Types.ObjectId;

export const getRequests = async (req,res)=>{
    try {
        const requestMessages = await RequestMessage.find();
        res.status(200).json(requestMessages);
        console.log(requestMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}   

export const createRequest = async (req,res)=>{
    const request = req.body;
    // const newRequest = new RequestMessage(request);
    const newRequestMessage = new RequestMessage({ ...request, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newRequestMessage.save();  
        res.status(201).json(newRequestMessage);  
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const getRequest = async (req, res) => { 
    const { id } = req.params;
    

    try {
        const request = await RequestMessage.findById(id);
        
        res.status(200).json(request);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateRequest = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id))  return res.status(404).send(`No request with id: ${id}`);

    const updatedRequest = { creator, title, message, tags, selectedFile, _id: id };

    await RequestMessage.findByIdAndUpdate(id, updatedRequest, { new: true });

    res.json(updatedRequest);
}

export const deleteRequest = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No request with id: ${id}`);

    await RequestMessage.findByIdAndRemove(id);

    res.json({ message: "Request deleted successfully." });
}