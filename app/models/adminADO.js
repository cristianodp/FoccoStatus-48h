module.exports.validaUsuario = function(par,callback) {
    
     const plsql = `BEGIN :ret := FOCCO_STATUS.RETORNA_ID_USUARIO(pi_usuario=> '${par.login}',pi_senha=> '${par.passwd}') ; END;`
    
     var oracledb = require('oracledb')
     var conn = require('../../config/oracle/database')
 
     conn().then(function(connection) {
         return connection.execute(
                             plsql,
                         { ret: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER , maxSize: 10} }
                     )
         .then(function(result) {
                 callback(null,result.outBinds)
                 return connection.close();
             })
             .catch(function(err) {
                 callback(err,null)
                 return connection.close();
             });
         })
         .catch(function(err) {
             callback(err,null)
             return connection.close();
         }); 
 }
 
 
