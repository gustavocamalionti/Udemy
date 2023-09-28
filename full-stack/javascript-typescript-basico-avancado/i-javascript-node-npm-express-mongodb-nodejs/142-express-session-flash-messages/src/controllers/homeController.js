const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res) => {
    // console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    //  req.flash('info', 'Olá mundo!');
    //     req.flash('error', 'Olá mundo!');
    //     req.flash('info', 'Olá mundo!');

    //  req.session.usuario = {
    //         nome: 'Luiz', logado: true
    //     }
    res.render('index');
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
}