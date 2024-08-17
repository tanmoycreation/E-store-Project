require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Define the database URL from environment variable
const db_url = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB database successfully connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
