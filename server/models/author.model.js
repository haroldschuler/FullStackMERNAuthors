const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3,"Author {PATH} must be at least 3 characters in length"]
    }
},{timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);