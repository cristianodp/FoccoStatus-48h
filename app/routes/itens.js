module.exports = function(application) {
	
	application.post('/api/itens', function(req, res){
		console.log('rota api itens');
		application.app.controllers.itens.getQuery(application, req, res);		
	});

	application.post('/api/itens/execute', function(req, res){
		console.log('rota api itens Execute');
		application.app.controllers.itens.execQuery(application, req, res);		
	});

	
};