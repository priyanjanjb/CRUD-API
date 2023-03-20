const express = require('express');
const mongoose = require("mongoose");
const router = require("./router");


const morgan = require('morgan')





const port = 3000;

const app = express();

app.use(morgan('dev'));//postman command show in console

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);//use the router.js file


app.listen(port, async ()=>{
    console.log(`server up ${port}`);
});




