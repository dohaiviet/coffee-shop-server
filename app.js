require('dotenv/config');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const api = process.env.API_URL;
const mongoose = require('mongoose');
const username = process.env.MONGOOSE_DB_USERNAME;
const password = process.env.MONGOOSE_DB_PASSWORD;
const uriConnectDb = `mongodb+srv://${username}:${password}@coffershop.jd7g21e.mongodb.net/`;
const productRouter = require('./src/routers/productRouter');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(uriConnectDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'coffee-shop'
} || undefined)
    .then(() => {
        console.log('connected to MongoDB');
    }).catch((error) => {
    console.log(error)
})

app.use(`${api}/products`, productRouter);

app.get(`/`, (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});