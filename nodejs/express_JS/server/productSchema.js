const mongoose = require('mongoose');

const prodSchema = {
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
}

module.exports = mongoose.model( "Product", prodSchema );