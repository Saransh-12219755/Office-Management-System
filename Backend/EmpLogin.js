const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load users data from JSON file
const usersData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = usersData.users.find(user => user.username === username && user.password === password);

    if (user) {
        res.redirect('https://www.google.com');
    } else {
        res.status(401).send('Incorrect Username or Password');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});