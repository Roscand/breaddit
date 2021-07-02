const express = require('express');
const cookieParser = require('cookie-parser');
const colors = require('colors');

const router = require('./router');

const app = express();
const port = process.env.PORT || 5000;
const cb = () => console.log(`Server is listening on ${port}`.green);

app.use(cookieParser());
app.use(express.json());
app.use('/', router);

app.listen(port, cb);