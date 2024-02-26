const express =  require("express")
const router = express.Router()
const EventModel = require('../models/event')
var session = require('express-session')
var eventController = require('../controllers/eventController')

router.get('/',async(req,res)=>{
    
    const temporaryData = eventController.getTemporaryData();
    try {
        const { token } = req.query;
        const userData = temporaryData[token];
        console.log(token)
        // console.log('session',
        // req.session.formData,req.session.token)
        // console.log(userData)

    // Verify the token against the stored token in session
    if (userData) {
        console.log("used")
        // var data = req.session.formData
        console.log(userData)
        const newEvent = new EventModel(userData);
      // const newEvent = new EventModel(req.body);
      await newEvent.save();
      // console.log('WOOOKRINggg')
      res.status(201).json({ message: 'Event saved successfully' });
        console.log('Form data:', req.session.formData);

        // Remove the form data and token from session
        // delete req.session.formData;
        // delete req.session.token;
        delete temporaryData[token]

        // res.status(200).send('Email verification successful');
    } else {
        res.status(400).send('Invalid or expired verification token');
    }
    } catch (error) {
        console.log('Yhe pe',error)
    }
    
})

module.exports = router