exports.paginaInicial = (req, res,) => {
    console.log('Respondendo ao cliente.');
    res.render('index');
    // next();
    return;
};

exports.trataPost = (req,res, next) => {
    res.send(req.body);
    return;
}