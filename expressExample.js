const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();
require('dotenv').config();

app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.use("/", router);

router.get("/", (req, res) => {
    // Read the HTML file and send it as a response
    const fs = require('fs');
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            // Set the Content-Type header to indicate that you're sending HTML
            res.setHeader('Content-Type', 'text/html');
            // Send the HTML content as the response
            res.send(data);
        }
    });
});

// POST route for testing
router.post("/", (req, res) => {
    const requestData = req.body;

    // Stringify the requestData object
    const userData = JSON.stringify(requestData);

    // Read the HTML file and replace a placeholder with the user input
    const fs = require('fs');
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            // Replace the placeholder with the user input (userData)
            const updatedHtml = data.replace('{userData}', userData);

            // Set the Content-Type header to indicate that you're sending HTML
            res.setHeader('Content-Type', 'text/html');
            // Send the updated HTML content as the response
            res.send(updatedHtml);
        }
    });
});

const PORT = 1337;
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});