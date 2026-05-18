const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send("<h1>Hellow heheh</h1>")

})


app.get('/home', (req, res) => {
    res.render('home.ejs')

})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})









app.get('/haha', (req, res) => {

    res.send('k xa halkhabr sanchai ho')
})

app.get('/test', (req, res) => {
    res.send('i have been printed successfully.')

})

app.listen('3000', () => {//callback functions
    console.log('Project suru vayo hai ta');


})

// NOTE: node--watch (__filename.js)

// For UI rendering below template engines are used in monolithic architecture
// EJS->embeedded javascript
// and other similar ares Pug, moustache,handlebar, jinja, blade



