const express = require('express');
const app = express();
const mongoose = require('mongoose');

const playermodel = require('./models/player');
const salarymodel = require('./models/salary');

const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://airpods1:apples%40reTastyif@cluster0.wao9w.mongodb.net/baseball_data?retryWrites=true&w=majority')

app.listen(3301, () => {
    console.log('server runs perfectly');
})

app.get("/getplayers", (req,res)=> {
    playermodel.find({}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
} );


app.get("/getsalary", (req,res)=> {
    salarymodel.find({}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
} );

