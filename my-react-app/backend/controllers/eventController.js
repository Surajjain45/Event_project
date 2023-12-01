const EventModel = require('../models/event');

exports.createEvent = async (req, res) => {
  try {
    const newEvent = new EventModel(req.body);
    await newEvent.save();
    // console.log('WOOOKRINggg')
    res.status(201).json({ message: 'Event saved successfully' });
  } catch (error) {
    console.error('Error saving event:', error);
    res.status(500).json({ error: 'Event could not be saved' });
  }
};
