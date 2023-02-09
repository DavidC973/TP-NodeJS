const Article = require('../models/articleSchema');

exports.createArticle = (req, res, next) => {
    delete req.body._id;
    article = new Article({
        ...req.body
    });
    article.save()
    .then(() => res.status(201).json({ message: 'Article enregistré !'}))
    .catch(error => res.staatus(400).json({error }));
}

exports.getAllArticle = (req, res, next) => {
    Article.find()
    .then(article => res.status(200).json(article))
    .catch(error => res.status(404).json({ error}));
}

exports.getArticleById = (req, res, next) => {
    Article.findOne({ _id: req.params.id})
    .then(article => res.status(200).json(article))
    .catch(error => res.status(404).json({ error}));
}

exports.getArticleByTitle = (req, res, next) => {
    const encoddedTitle = encodeURIComponent(req.params.title);
    Article.findOne({ title: decodeURIComponent(encoddedTitle)})
    .then(article => res.status(200).json(article))
    .catch(error => res.status(404).json({ error}));
}


exports.updateArticle = (req, res, next) => {
    Article.updateOne({ _id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Article modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({message: 'Article supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}