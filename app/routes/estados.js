module.exports = function(application) {
	
	application.post('/api/estados', function(req, res){
		console.log('rota api estados');
		application.app.controllers.estados.getQuery(application, req, res);		
	});

	application.post('/api/estados/Execute', function(req, res){
		console.log('rota api estados Execute');
		application.app.controllers.estados.execQuery(application, req, res);		
	});

	
};