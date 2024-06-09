// routes/auth.js (or wherever your routes are defined)
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const EventModel = require('../models/event'); // Assuming you have a model for users

router.post('/', async (req, res) => {
  

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
