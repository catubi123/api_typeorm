const config = require("config.json");
const mysql = require("msql2/promise");

module.export =db ={};

initialize();

async function initialize() {

    const { host, port, user,password, database} = config.database;
    const connection = await mysql.createConnection({host, port, password});
    await connection.query('CREATE DATABASE IF NOT EXISTS\'${database}\";');
}

const sequelize = new sequelize(database, user, password, {dialect : 'mysql'});

db.User = require ('../users/user.model')(sequelize);

await.sequelize.sync({ after:true});