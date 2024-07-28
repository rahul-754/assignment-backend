// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const fileupload = require('express-fileupload')


// Initialize Express app
const app = express();

//middleware hai
app.use(express.json());
app.use(bodyParser.json());
app.use(fileupload());


// app.use(
//     cors({
//         origin:"http://localhost:5173",
//         credentials:true,
//     })
// )
// Connect to MongoDB
connectDB();


// Routes
app.use('/api/v1', employeeRoutes);

// Start server
app.get("/",(req,res)=>{
    res.send("App is working.")
})
const PORT = process.env.PORT ||4000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
