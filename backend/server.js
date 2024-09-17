const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const redditRoutes = require('./routes/redditRoutes');

const cors = require('cors');

require('./config/dotenv');


const app = express();
const server = http.createServer(app);


// Connect to the database
connectDB();

// Middleware
app.use(express.json());
// app.use(require('cors')());


app.use(cors({
    origin: '*', // Allow all origins (for development only)
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization', 'Content-Type'],
  }));


  
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reddit', redditRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
