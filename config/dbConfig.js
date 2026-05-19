const databaseConfig = {
    // db: process.env.DB
    // username: 'root',
    // password: '',
    // dialect: 'mysql',
    // port: 3306,
    // host: 'localhost'


    db: process.env.DB,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    dialect: 'mysql',
    port: 3306,,
    host: process.env.HOST
}

module.exports = databaseConfig