const { name } = require('ejs')
const express = require('express')
const app = express()



// app.get('/', (req, res) => {
//     res.send("<h1>Hellow heheh</h1>")

// })


// app.get('/home', (req, res) => {

//     const data = {
//         name: "nischal",
//         age: 22,
//         location: "brt"
//     }

//     const family = {
//         fathername: "haha",
//         mother: "kus"
//     }

//     res.render('home.ejs', {
//         haha: data,
//         hehe: family
//     })

// })

// app.get('/about', (req, res) => {
//     res.render('about.ejs')
// })



// // same MVC archhitecture implemented in the ejs as well
// //MVCR->model view controller routes
// //MVT->used in Django model view template






// app.get('/haha', (req, res) => {

//     res.send('k xa halkhabr sanchai ho')
// })

// app.get('/test', (req, res) => {
//     res.send('i have been printed successfully.')

// })

// app.listen('3000', () => {//callback functions
//     console.log('Project suru vayo hai ta');


// })

// NOTE: node--watch (__filename.js)

// For UI rendering below template engines are used in monolithic architecture
// EJS->embeedded javascript
// and other similar ares Pug, moustache,handlebar, jinja, blade


app.use(express.static('public'))

app.set('view engine', 'ejs')

const students = [
    {
        id: 1,
        name: "nischal",
        age: 12,
        course: "reactjs",
    },
    {
        id: 2,
        name: "mahesh",
        age: 12,
        course: "nodejs",
    }

]

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page'
    })
})

app.get('/students', (req, res) => {
    res.render('students', {
        title: 'Students',
        students
    })
})

app.get('/add-student', (req, res) => {
    res.render('add-student', {
        title: 'Add Student',
    })
})

app.listen(3000, () => {
    console.log('Serverr running on port 3000');

})


users.create({
    email: "mausam@gmail.com",
    password: "password"
})//