const EventModel = require('../models/event');
const bcrypt = require('bcrypt');

exports.createEvent = async (req, res) => {

  const wholeData = req.body;  
  console.log("whole DATA:: ", wholeData)
  
  try {
    // console.log(req.body.uniqueId)
    const Password = await hashPassword(wholeData.organizerEmail);
    
    // console.log(hashPassword);
    const newEvent = new EventModel({Password , ...wholeData});
    // const newEvent = new EventModel(req.body);
    await newEvent.save();
    // console.log('WOOOKRINggg')
    res.status(201).json({ message: 'Event saved successfully' });
  } catch (error) {
    console.error('Error saving event:', error);
    res.status(500).json({ error: 'Event could not be saved' });
  }
};

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}
