exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável Local';
    next();
}
exports.outroMiddleware = (req, res, next) => {
    next();
}