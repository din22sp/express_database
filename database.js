const mysql=require('mysql');

const connectionString="mysql://libuser:libpass@localhost:3306/library";

const connection=mysql.createPool(connectionString);

module.exports=connection;