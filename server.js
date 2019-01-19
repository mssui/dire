/* eslint-disable standard/object-curly-even-spacing */
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const session = require('express-session')

mongoose.Promise = global.Promise
const port = process.env.PORT || 3030
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dojo')

var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))


app.use(session({ secret: 'direteam', saveUninitialized: false, resave: false, cookie: { maxAge: 1000 } }))
app.use('*', cors())

app.use('/', require('./routes/api'))


// Handle production and SPA
if(process.env.NODE_ENV === 'production'){
	app.use(express.static(__dirname + '/public/'));
	app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () => {
	console.log('Server is running on:', port)
})
