const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")
const EventModel = require("../models/event")

const  send_email = async (email,uniqueId,token)=>{
    try {
        console.log(uniqueId,email)
  
     const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'suraj.2125cs1087@kiet.edu',
          pass: 'Suraj@MIJEETEGA@RS'
      }
      })
  
      let mailOptions = {
        from: 'suraj.2125cs1087@kiet.edu',
        to: email,
        subject: 'Verification email',
        html: `Hi <p> Please click <a href=http://localhost:5173/verify?uniqueId=${uniqueId}>here</a> to change the password</p>`  };
  
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

  router.post('/',async(req,res)=>{
    try {


        const email = req.body.email;
    const uniqueId = req.body.uniqueId

    console.log(uniqueId)

    const user = await EventModel.findOne({
      uniqueId
    })

    if(!user){
      res.send({message:'wrong uniqueId'})
    }
    
    else{
      if(user.organizerEmail===email){
        await send_email(email,uniqueId)
        res.send({message:'success'})
      }

      else{
        res.send({message:'Does not Match'})
      }
    }
   
    } catch (error) {
      console.log("this is the main")
      res.send({message:'failed'})
    }
  })

  router.get('/',(req,res)=>{
    res.send("This is the forget password page")
  })

 module.exports = router
