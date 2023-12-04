const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const eventController = require('../controllers/eventController');
const EventModel = require("../models/event")

// router.post('/create', eventController.createEvent);

// router.post('/', async (req, res) => {
//     try {
//       const newEvent = new EventModel(req.body);
//       await newEvent.save();
//       res.status(201).json({ message: 'Event saved successfully' });
//     } catch (error) {
//       console.error('Error saving event:', error);
//       res.status(500).json({ error: 'Event could not be saved' });
//     }
//   });

router.post('/create', eventController.createEvent);

  // Add more routes if needed...
  
//   module.exports = router;

module.exports = router;