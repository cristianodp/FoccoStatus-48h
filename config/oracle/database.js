var oracledb = require('oracledb');
var dbConfig = require('./dbconfig');


var conn = function () {
        
    var db = oracledb.getConnection(
        {
          user          : dbConfig.user,
          password      : dbConfig.password,
          connectString : dbConfig.connectString
        })

    return db;
}


module.exports = conn;
