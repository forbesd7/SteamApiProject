const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const db = require('./queries')
const app = express();


app.use(cors());

app.get('/gameNames', db.getGameNames)
app.get('/addGame', db.addGame)




app.listen(3000, () => {
    console.log("listening on port 3000...");
});