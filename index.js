const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected Successfully");
})
.catch((error)=>{
    console.log("failed to connect Database",error);
})

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Route imports
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const { CallPage } = require('twilio/lib/rest/api/v2010/account/call');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/resume', resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
