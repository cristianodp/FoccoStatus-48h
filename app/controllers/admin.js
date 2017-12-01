
module.exports.login =function(application, req, res){
	var dadosForm = req.body;
	console.log(dadosForm);
    req.assert('login','login não informado').notEmpty();
    req.assert('passwd','senha não informada').notEmpty();
    
    var erros = req.validationErrors();

  	if(erros){
  	  res.send(erros);
  	  return;
  	}
		
		var erros = req.validationErrors();
		
		const ado = require('../models/adminADO')
		ado.validaUsuario(dadosForm,function(err,result){
			if (err){
				res.send(err)
			}else{
				res.send(result)
			}
	});	
	
}
