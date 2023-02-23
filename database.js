const mysql=require('mysql2');

const connectionString="mysql://libuser:libpass@127.0.0.1:3306/library";

//const connection=mysql.createPool(connectionString);
const connection=mysql.createPool(process.env.MYSQL_SERVER);

module.exports=connection;