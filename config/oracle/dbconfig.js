module.exports = {
    user          : process.env.NODE_ORACLEDB_USER || "FOCCOERP_CUS",
    password      : process.env.NODE_ORACLEDB_PASSWORD || "A7077xsb5ed",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "db-01/db01",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
  };