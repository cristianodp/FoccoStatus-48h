module.exports.getQuery = function(application, req, res){
	var dadosForm = req.body;
	console.log(dadosForm);
	req.assert('usuId','Usuario não informado').notEmpty();

  	var erros = req.validationErrors();

  	if(erros){
  	  res.send(erros);
  	  return;
  	}
	
	const ado = require('../models/categoriasADO')
	ado.getCategorias(dadosForm,function(err,result){
		if (err){
			res.send(err)
		}else{
			res.send(result)
		}
	});	
}

module.exports.execQuery = function(application, req, res){
	var dadosForm = req.body;
	console.log(dadosForm);
	req.assert('usuId','Usuario não informado').notEmpty();

  	var erros = req.validationErrors();

  	if(erros){
  	  res.send(erros);
  	  return;
  	}
	
	const ado = require('../models/categoriasADO')
	ado.getCategoriasExec(dadosForm,function(err,result){
		if (err){
			res.send(err)
		}else{
			res.send(result)
		}
	});	
}


