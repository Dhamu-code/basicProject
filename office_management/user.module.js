const mongoose = require('mongoose');

const users = new mongoose.Schema({ 
name: String, 
email: String, 
role: { type: String, enum: ['student', 'instructor'] }, 
enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Enrollment' }] 
});

module.exports = mongoose.model("users", users);