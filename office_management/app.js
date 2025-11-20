const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const Router = require('./router');
const port = 3000; 

app.use(express.json()); 


// Connect to MongoDB 
mongoose.connect('mongodb+srv://dhamodharan1306:Dhamu%401306@atlascluster.lnxozwh.mongodb.net/office_management', { 
useNewUrlParser: true, 
useUnifiedTopology: true, }).then(() => console.log('Connected to MongoDB')) 
.catch(err => console.error('Failed to connect to MongoDB', 
err)); 

app.use("/api", Router);

app.listen(port, () => { 
console.log(`Server running on http://localhost:${port}`); 
});