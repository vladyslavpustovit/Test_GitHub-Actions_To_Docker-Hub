// const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();
require('dotenv').config();

app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.use("/", router);

router.get("/api", (req, res)=>{
    res.json({ message: "GET REQUEST SUCCESS" });
});

// POST route for testing
router.post("/api", (req, res) => {
    const requestData = req.body;
    // You can do something with the posted data here
    res.json({ message: "POST REQUEST SUCCESS.", data: requestData });
});

// ATTEMPT #2 TO FAIL THE BUILD AND PREVENT CHANGES IN THE GITHUB REPO

const PORT = 1337;
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});