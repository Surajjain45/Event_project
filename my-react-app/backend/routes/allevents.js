// eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event'); // Assuming you have an Event model

// Route to fetch all events
router.get('/', async (req, res) => {
  try {
    console.log("helloooo from bsck")
    const allEvents = await Event.find({}, 'uniqueId eventName eventCategory');
    res.json(allEvents);
  } catch (error) {
    console.error('Error fetching all events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
