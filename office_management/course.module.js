const mongoose = require('mongoose');

const course = new mongoose.Schema( { 
title: String, 
description: String, 
instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' 
}, 
reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' 
}] 
} );

module.exports = mongoose.model("courses", course);