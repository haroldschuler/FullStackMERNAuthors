const { Author } = require('../models/author.model');
// Test route
module.exports.index = (req, res) => {
    res.json("hi")
}

// Finds all instances of Author
module.exports.findAll = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json(allAuthors)
        })
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

// Finds one author by ID
module.exports.findOne = (req, res) => {
    Author.findById(req.params.id)
        .then(author => {
            res.json(author)
        })
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

// Creates a new Author instance
module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json(newAuthor)
        })
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}));
}

// Edits an Author instance by ID
module.exports.updateOne = (req, res) => {
    Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedAuthor => {
            res.json(updatedAuthor);
        })
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}));
}

// Deletes an Author instance by ID
module.exports.deleteOne = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(deletedAuthor => {
            res.json(deletedAuthor);
        })
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}