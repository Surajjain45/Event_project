// routes/audienceRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Event = require('../models/event');
const Audience = require('../models/Audience');

// Route to register an audience for a specific event
router.post('/register', async (req, res) => {
  console.log("till herrree")
  const { name, email, phone, eventId } = req.body;
//   const name = req.params.name;
  console.log(name);
//   const email = req.params.email;
  console.log(email);
//   const phone = req.params.phone;
  console.log(phone);
//   const eventId = req.params.eventId;
  console.log(eventId);
  const checkin = false;
  // added this^^^
  
  try {
    // Create and save the audience document
    console.log("working 1")
    const audience = new Audience({ name, email, phone , checkin});
    //                                          added this^^^(, checkin)
    console.log("working 2")
    const savedAudience = await audience.save();
    console.log("working 3")
    console.log("saved id", savedAudience._id)

    console.log("event ID", eventId)
    
    // Update the event with the audience reference

    // const document = await Event.findOne({ uniqueId: uniqueId }).populate('audience');;
    const document = await Event.findOne({ uniqueId:eventId.uniqueId });
    const id = document._id;
    if (!document) throw 'Document not found';

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
