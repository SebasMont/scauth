const mysql      = require('mysql2');
const dbParams = {
  host      : 'sql.freedb.tech',
  port     : 3306,
  user     : 'freedb_remote_u',
  password : 'buA6WuX9$%7%8QQ',
  database : 'freedb_expocet_uaeh',
}

const pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'sql.freedb.tech',
  port     : 3306,
  user     : 'freedb_remote_u',
  password : 'buA6WuX9$%7%8QQ',
  database : 'freedb_expocet_uaeh',
  insecureAuth : false
});

exports.pool = pool;
exports.dbParams = dbParams;