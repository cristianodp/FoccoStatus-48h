module.exports.getQuery = function(application, req, res){
	var dadosForm = req.body;
	console.log(dadosForm);
	req.assert('usuId','Usuario não informado').notEmpty();
	req.assert('catId','Categoria não informado').notEmpty();

  	var erros = req.validationErrors();

  	if(erros){
  	  res.send(erros);
  	  return;
  	}
	
	const ado = require('../models/estadosADO')
	ado.getEstados(dadosForm,function(err,result){
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
	
	const ado = require('../models/estadosADO')
	ado.getEstadosExec(dadosForm,function(err,result){
		if (err){
			res.send(err)
		}else{
			res.send(result)
		}
	});	
}


