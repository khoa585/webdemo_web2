require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cookie = require('cookie-parser')
const session = require('express-session')
const passport = require('passport');
const path = require('path');
app.use(express.static('uploads'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('express-session')({ 
	secret: 'keyboard cat', 
	resave: true, 
	saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());
const initPassportLocal = require("./commons/passport");
app.use(require('flash')());
initPassportLocal();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
try {
	mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (erro) => {
		if (erro) {
			console.log(erro);
		} else {
			console.log("Connected to DB");
		}
	});
} catch (error) {
	handleError(error);
}
const port = process.env.PORT;
const router = require('./Router/Product_router')
app.use(async (req, res, next) => {
	if (req.isAuthenticated()) {
		console.log(req.session.cookie)
	}
	next();
})
app.use('/', router);
app.listen(process.env.PORT || port, () => { console.log(`Example app listening on port ${port}`) })