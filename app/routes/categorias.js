module.exports = function(application) {
	
	application.post('/api/categorias', function(req, res){
		console.log('rota api categorias');
		application.app.controllers.categorias.getQuery(application, req, res);		
	});

	application.post('/api/categorias/execute', function(req, res){
		console.log('rota api categorias Execute');
		application.app.controllers.categorias.execQuery(application, req, res);		
	});

	
};