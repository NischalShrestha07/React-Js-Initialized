// const { Sequelize, DataTypes } = require('sequelize')  //a type of ORM like other prizma, moongose, sequelize



// // const sequelize = new Sequelize('haha', 'root', '', {//databaseName, database username, defaultPassword(password)
// //     host: 'localhost',
// //     port: 3306  /// mysql default port
// // })



// const sequelize = new Sequelize('databaseName', 'root', '', {
//     port: 3306,// MYSql server port
//     host: 'localhost',//where the project is being hosted
//     dialect: 'mysql' //name of database being used
// })

// sequelize.authenticate()
//     .then(() => {
//         console.log('milyo username password');

//     })
//     .catch((error) => {
//         console.log('error ayo hai', error);

//     })


// // const me = {}

// // me.name = 'haha',
// //     me.age = 12,a


// const db = {}

// db.Sequelize = Sequelize
// db.sequelize = sequelize

// db.sequelize.sync({ force: false }).then(() => {
//     console.log('Synced done');

// })

// module.exports = db




const { Sequelize, DataTypes } = require('sequelize')
const databaseConfig = require('../config/dbConfig')

//this below is also correct 
// const sequelize = new Sequelize('expressdb', 'root', '', {
//but for better approach use below pattern as store the credentials inside the seperate file instead.
const sequelize = new Sequelize(databaseConfig.db, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect

})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize



db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');

    })

module.exports = db