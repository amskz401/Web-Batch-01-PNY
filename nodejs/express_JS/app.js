const mongoose = require('mongoose');

const express = require("express");

mongoose.connect('mongodb://127.0.0.1:27017/new_product_db')
  .then(() => console.log('Connected!'));

// const Product = mongoose.model('Product', { title: String, description: String, price: Number });

const app = new express();
app.use(express.static('public'))
app.set('view engine', 'ejs')

// get data from url or form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Users Routes
app.use('/users', require('./routes/users'));

// Products Routes
app.use('/product', require('./routes/product'));
// Orders Routes

app.listen(4000);