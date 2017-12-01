module.exports = function(application) {

	application.post('/api/login', function(req, res){
		console.log('rota api login');
		application.app.controllers.admin.login(application, req, res);		
	});

	
};