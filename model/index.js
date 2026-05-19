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


const sequelize = new Sequelize('expressdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize



db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');

    })

module.exports = db