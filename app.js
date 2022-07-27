require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html' )));
app.get('/product-detail', (req,res) => res.sendFile(path.join(__dirname, 'views', 'productDetail.html' )));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html' )));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html' )));
app.get('/terms', (req,res) => res.sendFile(path.join(__dirname, 'views', 'terms.html' )));
app.get('/profile', (req,res) => res.sendFile(path.join(__dirname, 'views', 'profile.html' )));

app.listen(process.env.PORT || 3030, () => console.log('Server running in http://localhost:' + process.env.PORT || 3030))