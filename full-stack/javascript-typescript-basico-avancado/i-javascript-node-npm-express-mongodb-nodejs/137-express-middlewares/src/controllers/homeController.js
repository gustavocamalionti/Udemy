exports.paginaInicial = (req, res,) => {
    console.log('Respondendo ao cliente.');
    res.render('index');
    console.log(`Olha o que tem na req.session.nome: ${req.session.nome}`)
    // next();
    return;
};

exports.trataPost = (req,res, next) => {
    res.send('Ei, sou sua nova rota de POST.');
    return;
}