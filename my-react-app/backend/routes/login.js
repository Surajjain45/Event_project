// routes/auth.js (or wherever your routes are defined)
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const EventModel = require('../models/event'); // Assuming you have a model for users

router.post('/loginhere', async (req, res) => {
  console.log("bhoasdaaa");
    console.log("req.body = " , req.body);
    
    const { uniqueId, Password } = req.body;
    console.log("uniqueId = " , uniqueId);
    console.log("Password = " , Password);


  try {

    console.log("working till heree")
    // Check if the user with the provided uniqueID exists
    const user = await EventModel.findOne({ uniqueId });
    console.log("working till heree")
    console.log("USER: ", user);
    
    if (!user) {
        console.log("working till heree, USER NOT FOUUND")
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the entered password with the hashed password stored in the database
    // async function hashPassword(Password) {
    //     const saltRounds = 10;
    //     return bcrypt.hash(Password, saltRounds);
    //   }
      console.log('Entered Password:', Password);
      console.log('Stored Hashed Password:', user.Password);
    //   const hashedPassword = await hashPassword(Password);

    const passwordMatch = await bcrypt.compare(Password, user.Password);
    

    if (passwordMatch) {
      // Authentication successful
      // You might want to generate a token for the user at this point
      res.status(200).json({ message: 'Authentication successful' });
      console.log();
    } else {
      // Incorrect password
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// Other routes and middleware...

module.exports = router;
