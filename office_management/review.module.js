const mongoose = require('mongoose');

const review = new mongoose.Schema(  { 
course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' 
}, 
student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
rating: Number, 
comment: String 
}   );

module.exports = mongoose.model("Reviews", review);