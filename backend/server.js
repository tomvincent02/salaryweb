const express = require('express');
const app = express();
const mongoose = require('mongoose');

const playermodel = require('./models/player');
const salarymodel = require('./models/salary');

const cors = require('cors');

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://airpods1:apples%40reTastyif@cluster0.wao9w.mongodb.net/baseball_data?retryWrites=true&w=majority')

app.listen(3301, () => {
    console.log('server runs perfectly');
})


//Searches for all players and salaries

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


//Searches for just the playerid given a name in the url


app.get("/getplayerid/:nameGiven", (req,res)=> {
    playermodel.find({ "nameGiven" : req.params.nameGiven}, { playerID: 1, _id: 0}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result[0]);
        }
    });
} );


//These two functions get the data from the body instead, using these two mainly for the website


app.get("/getsalfromid", (req,res)=> {
    salarymodel.find({ playerID : req.body.playerID}, { salary: 1, _id: 0}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result[0]);
        }
    });
} );

app.get("/getbodyid", (req,res)=> {
    console.log('Body: ', req.body);
    playermodel.find({ nameGiven : req.body.nameGiven}, { playerID: 1, _id: 0}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result[0]);
        }   
    });
} );


