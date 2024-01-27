const mongoose = require("mongoose");

const userSchema = {
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    phone: {
        type: String
    }
}

module.exports = mongoose.model( "User", userSchema );

