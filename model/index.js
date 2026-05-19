const { Sequelize, DataTypes } = require('sequelize')  //a type of ORM like other prizma, moongose, sequelize

const nayaGhar = new Sequelize('haha', 'root', '', {
    host: 'localhost',
    port: 3306  /// mysql default port
})



