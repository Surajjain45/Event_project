// const EventModel = require('../models/event');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer")
const EventModel = require('../models/event')
const crypto = require('crypto')
var session = require('express-session')


// let temporaryData = require('../app.js')
let temporaryData = {}
const  send_email = async (email,name,token)=>{
  try {

   const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'suraj.2125cs1087@kiet.edu',
        pass: ''
    }
    })

    let mailOptions = {
      from: 'suraj.2125cs1087@kiet.edu',
      to: email,
      subject: 'Verification email',
      html: `<p> new Please click <a href=http://localhost:3000/verify?token=${token}>here</a> to visit our website.</p>`  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

  
  } catch (error) {
    console.log(error)
  }
}
exports.createEvent = async (req, res) => {

  const wholeData = req.body;  
  console.log("whole DATA:: ", wholeData)
  
  try {
    
    const token = crypto.randomBytes(20).toString('hex');
    const hashedpassword = await hashPassword(wholeData.organizerEmail);
    // req.session.formData = { ...wholeData,Password:hashedpassword };
    // req.session.token = token;
    temporaryData[token] = { ...wholeData,Password:hashedpassword };
    await send_email(req.body.organizerEmail,req.body.organizerName,token)
    console.log("mail send")


    // Store the form data and token in session

    // console.log(req.session.formData)
    // console.log(req.session.token)
    
  } catch (error) {
    console.error('Error saving event:', error);
    res.status(500).json({ error: 'Event could not be saved' });
  }
};

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

exports.getTemporaryData = () => {
  return temporaryData;
};
