var pg = require('pg');

//var conString = "postgres://postgres:postgres@oracle/ondetemrodeio";
//var conString = "postgres://ondetemrodeio:Rodeio06062017@ondetemrodeio.postgresql.dbaas.com.br/ondetemrodeio";
var conString = "postgres://ondetemrodeio:Rodeio06062017@ondetemrodeio.cjpwbxn4tteu.us-east-2.rds.amazonaws.com/ondetemrodeio";

var connPg = function() {
    var client = new pg.Client(conString);
    client.connect();
   return client;
}

module.exports = function() {
   return connPg;
}