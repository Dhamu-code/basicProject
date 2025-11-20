const mongoose = require('mongoose');

const enrollment = new mongoose.Schema(  { 
student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' 
}, 
enrolledAt: Date 
}  );

module.exports = mongoose.model("Enrollments", enrollment);