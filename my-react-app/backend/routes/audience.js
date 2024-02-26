// routes/audienceRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Event = require('../models/event');
const Audience = require('../models/Audience');

// Route to register an audience for a specific event
router.post('/register', async (req, res) => {
  console.log("till herrree")
  const { user, eventId} = req.body;
//   const name = req.params.name;

console.log(user.name);
const name = user.name;
//   const email = req.params.email;
console.log(user.email);
const email = user.email;
//   const phone = req.params.phone;
console.log(user.phone);
const phone = user.phone;
//   const eventId = req.params.eventId;
console.log(eventId);
const eventID = eventId;
  const checkin = false;

  const qrCodeUrl = JSON.stringify({ user, eventId });

  // added this^^^
  
  try {
    // Create and save the audience document
    console.log("working 1")
    const audience = new Audience({ name, email, phone , checkin , eventID, qrCodeUrl});
    //                                          added this^^^(, checkin)


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const existingAudience = await Audience.findOne({
      name,
      email,
      phone,
      eventID,
    });
  
    if (existingAudience) {
      console.log('Duplicate tickets created not allowed');
      return res
        .status(400)
        .json({ error: 'Duplicate tickets creating not allowed' });
    }


    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^CHECK FOR DUPLICATE REGISTRATION IN DATABASE


    const savedAudience = await audience.save();
    console.log("saved id", savedAudience._id)

    console.log("event ID", eventId)
    
    // Update the event with the audience reference

    // const document = await Event.findOne({ uniqueId: uniqueId }).populate('audience');;
    const document = await Event.findOne({ uniqueId:eventId });
    const id = document._id;
    if (!document) throw 'Document not found';
    // else console.log("found");

    const updatedEvent = await Event.findByIdAndUpdate(
        id,
        { $push: { audience: savedAudience._id } },
        { new: true }
        );

        console.log("working 4")

    res.status(200).json({ message: 'Audience registered successfully' });
  } catch (error) {
    console.error('Error registering audience:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
