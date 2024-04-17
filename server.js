const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load users data from JSON file
const employee = JSON.parse(fs.readFileSync('Backend/EmpUsers.json', 'utf-8'));
const manager = JSON.parse(fs.readFileSync('Backend/ManUsers.json', 'utf-8'));
const hr = JSON.parse(fs.readFileSync('Backend/HRUsers.json', 'utf-8'));
const admin = JSON.parse(fs.readFileSync('Backend/AdminUsers.json', 'utf-8'));

//For Emp Login
app.post('/login1', (req, res) => {
    const { username, password } = req.body;

    const user = employee.users.find(user => user.username === username && user.password === password);

    if (user) {
        res.redirect('https://www.google.com');
    } else {
        window.alert("Incorrect Username or password")
    }
});
//For Manager Login
app.post('/login2', (req, res) => {
    const { username, password } = req.body;

    const user = manager.users.find(user => user.username === username && user.password === password);

    if (user) {
        res.redirect('https://www.google.com');
    } else {
        window.alert("Incorrect Username or password")
    }
});
//For HR
app.post('/login3', (req, res) => {
    const { username, password } = req.body;

    const user = hr.users.find(user => user.username === username && user.password === password);

    if (user) {
        res.redirect('https://www.google.com');
    } else {
        window.alert("Incorrect Username or password")
    }
});
//For Admin
app.post('/login4', (req, res) => {
    const { username, password } = req.body;

    const user = admin.users.find(user => user.username === username && user.password === password);

    if (user) {
        res.redirect('https://www.google.com');
    } else {
        window.alert("Incorrect Username or password")
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});