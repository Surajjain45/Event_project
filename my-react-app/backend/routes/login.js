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
    
    if(!user){
      res.send({message:'wrong uniqueId'})
    }
    // Compare the entered password with the hashed password stored in the database
    // async function hashPassword(Password) {
    //     const saltRounds = 10;
    //     return bcrypt.hash(Password, saltRounds);
    //   }

    else{
      console.log('Entered Password:', Password);
      console.log('Stored Hashed Password:', user.Password);
    //   const hashedPassword = await hashPassword(Password);

    const passwordMatch = await bcrypt.compare(Password, user.Password);
    

    if (passwordMatch) {
      // Authentication successful
      // You might want to generate a token for the user at this point
      res.status(200).json({ message: 'success' });
      console.log();
    } else {
      console.log("Wrong passwrd")
      res.json({message:'wrong'});
    }
  }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({message:'failed' });
  }
});

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// Other routes and middleware...

module.exports = router;
