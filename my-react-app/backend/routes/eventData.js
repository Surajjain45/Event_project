// eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event'); // Assuming you have an Event model

router.get('/:uniqueId', async (req, res) => {
  try {
    console.log("heyy from backend")
    const { uniqueId } = req.params;
    const eventDetails = await Event.findOne({ uniqueId });

    if (!eventDetails) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(eventDetails);
  } catch (error) {
    console.error('Error fetching event details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;