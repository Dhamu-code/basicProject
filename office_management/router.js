const mongoose = require('mongoose');
const user = require('./user.module');
const course = require('./course.module');
const express = require('express');
const Router = express.Router();

Router.post('/course', async (req, res) => {
    const newCourse = new course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
})

module.exports = Router;