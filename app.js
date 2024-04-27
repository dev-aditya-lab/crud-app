/*
code by Aditya Gupta
For Contact Mail me on => ad1123itya@gmail.com
Find me on instagram _its._.aadi
*/

const express = require('express');
const app = express();
const path = require('path');

const usermodel = require('./models/user');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');





app.get('/', function (req, res) {
    res.render('index');
});

app.get('/read', async function (req, res) {
    let allUsers =await usermodel.find();
    res.render('read', {users: allUsers});
});

app.get('/delete/:id', async function (req, res) {
    let allUsers =await usermodel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
});

app.get('/edit/:userid', async function (req, res) {
    let allUsers =await usermodel.findOne({_id: req.params.userid});
    res.render('edit', {users: allUsers});
});

app.post('/update/:userid', async function (req, res) {
    let { name, email, url } = req.body;
    let user =await usermodel.findOneAndUpdate({_id: req.params.userid}, {name, email, url });
    res.redirect('/read');
});

app.post('/create', async function (req, res) {
    let { name, email, url } = req.body;
    let createdUser = await usermodel.create({
        name,
        email,
        url
    });
    res.redirect("/read");
});






app.listen(3000, function () {
    console.log('now its running');
});