const mongoose = require('mongoose');
const user = require('./user.module');
const course = require('./course.module');
const express = require('express');
const Router = express.Router();

Router.post('/course', async (req, res) => {
   try{
    const { email } = req.body;
    
    const findUser = await user.findOne({ email: email});

    if (!findUser){
        return res.status(400).json({ error: "User with this email not found"});
    }

    if (findUser.role !== "instructor"){
        return res.status(400).json({ error: "User is not an instructor"});
    }

    const newCourse = new course({
        ...req.body,
        userId: findUser._id
    })

    await newCourse.save();

    res.status(201).json(newCourse);

   }catch (err){
    res.status(500).json({ error: err.message});
   }
})

Router.post('/user', async (req, res) => {
    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).json(newUser);
})

module.exports = Router;