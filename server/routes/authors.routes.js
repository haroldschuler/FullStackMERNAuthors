const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api', AuthorController.index);
    app.get('/api/authors/all', AuthorController.findAll);
    app.get('/api/author/:id', AuthorController.findOne);
    app.post('/api/author/new', AuthorController.create);
    app.put('/api/author/edit/:id', AuthorController.updateOne);
    app.delete('/api/author/delete/:id', AuthorController.deleteOne);
}

