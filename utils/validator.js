module.exports = {
    user: (app, req, res) => {
        req.assert('name', 'o nome eh obrigatorio.').notEmpty();
        req.assert('email', 'o email esta invalido.').notEmpty();
        
        let errors = req.validationErrors();
        if (errors){
            app.utils.error.send(err, req, res);
            return false;
        } else {
            return true;   
        }
    }
}