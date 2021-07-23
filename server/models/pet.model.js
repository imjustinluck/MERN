const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:[true, "Pet name must be unique"],
        minlength: [3, "Pet name must be 3 characters long"]
    },
    type: {
        type: String,
        minlength: [3, "Pet type must be 3 characters long"]
    },
    description: {
        type: String,
        minlength: [3, "Pet description must be 3 characters long"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    }
}, { timestamps: true });

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;