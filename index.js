const express = require('express');
const mongoose = require("mongoose");
const router = require("./router");
const router = require("./router");
const dotenv = require("dotenv");
const cors = require("cors");

const morgan = require('morgan')



dotenv.config();//otherwise cant read the .env file


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

mongoose.connect(process.env.MONGODB_URL, {//env file use to encrypt the DB connection details
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) //we call it promises
  .then(() => {//if the consition success
    console.log("Connected to MongoDB");
  })
  .catch((err) => {//if not success
    console.log(err);
  });




