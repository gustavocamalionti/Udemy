exports.middlewareGlobal = (req,res,next) => {
    
    // if (req.body.cliente) {
    //     console.log();
    //     req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE MIRANDA');
    //     console.log(`Vi que você postou ${req.body.cliente}`);
    //     console.log();
    // }

    next();
}
exports.outroMiddleware = (req,res,next) => {
    next();
}