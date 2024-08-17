require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const users = require('./routes/users');
const orders = require('./routes/orders');

// Create an Express application instance
const app = express();

// Use environment variables
const PORT = process.env.PORT || 5001;

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/productCategories', productCategories);
app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unexpected error:', err);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
