// routes/auth.js (or wherever your routes are defined)
const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const EventModel = require('../models/event'); // Assuming you have a model for users

router.get('/', async (req, res) => {
  console.log("Here")

  try {

   
    // Check if the user with the provided uniqueID exists
    const result = await EventModel.deleteMany({});
    console.log(result)
    
    
   
  } catch (error) {
    console.error('All delete fail', error);
    res.status(500).json({message:'failed' });
  }
});


module.exports = router;
