const express = require('express');
const app = express();
const port = 5500;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name;     // Access form data
    const email = req.body.email;
    const message = req.body.message;

    // Display a success message or log the received data for testing purposes
    res.send(`Form submitted successfully! Name: ${name}, Email: ${email}, Message: ${message}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
