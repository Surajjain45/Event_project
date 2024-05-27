// routes/event.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const Audience = require('../models/Audience');
// const mongoose = require('mongoose');

// Get all audience for a specific event
router.get('/:uniqueId', async (req, res) => {

  const { uniqueId } = req.params;

  // Check if the uniqueId is a valid ObjectId
  // if (!mongoose.Types.ObjectId.isValid(uniqueId)) {
  //   return res.status(400).json({ message: "Invalid ID format" });
  // }


  try {
    console.log("trying showing audience")
    // console.log("uniquee: ", req.params.uniqueId)
    console.log("uniquee: ", uniqueId)
    const theevent = await Event.findOne({uniqueId}).populate('audience');

    if (!theevent) {
      return res.status(404).json({ message: "Event not found" });
    }

    console.log("audiene : ", theevent.audience)
    console.log("audienceee vala bk")
    res.json(theevent.audience);
  } catch (error) {
    res.status(500).json({message: error.message });
  }
});

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const Event = require('../models/event'); // Assuming you have an Event model

// // Route to fetch all events
// router.get('/', async (req, res) => {
//   try {
//     console.log("helloooo from bsck")
//     const allEvents = await Event.find({}, 'uniqueId eventName eventCategory');
//     res.json(allEvents);
//   } catch (error) {
//     console.error('Error fetching all events:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;