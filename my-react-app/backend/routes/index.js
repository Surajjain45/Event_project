var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");


// const event = {
  //   name: 'sjnkjdn',
  //   date: new Date(),
  
  // }
  
  const sampleModel = require("../models/event")

  // TO WRITE A DATA IN DATABASE

router.get('/sample', async function(req, res , next) {
  try {
    const sampledata = await sampleModel.create({
      username: "imsuraj",
      name: "Suraj Jain",
      age: 10,
    });

    res.send(sampledata);
    
  } catch (error) {
    // Pass the error to the next middleware
    res.send(error);
  }

  // res.send(sampledata);
});


  //  TO READ FROM DATABASE

  router.get("/getsample" , async function(req, res , next) {

    //  const allsample= await sampleModel.find();
     const allsample= await sampleModel.findOne({username: "iamsuraj"});
     res.send(allsample);
  })

  // TO DELETE A DATA:

  // router.get("/deletesample" , async function(req, res , next) {

  //    const deletedsample= await sampleModel.findOneAndDelete({
  //     username: "iamsuraj"});

  //    res.send(deletedsample);
  // })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karan' });
});
// router.get('/sampl', function(req, res, next) {
//   res.render('sample', {newevent: event});
// });

module.exports = router;
