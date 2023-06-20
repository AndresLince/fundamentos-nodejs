const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: String,
    description: String,
});

const pet = mongoose.model('Pet', petSchema);

module.exports = pet;