const express = require("express")
const router = express.Router()
// const event = '../models/event'
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const EventModel = require("../models/event")
const { Experimental_CssVarsProvider } = require("@mui/material")

async function hashPassword(password) {
    const saltRounds = 10;
    return bcryptjs.hash(password, saltRounds);
  }

router.post('/update',async(req,res)=>{

    try {
        const uniqueId = req.body.uniqueId
        console.log("aagya")
        console.log(uniqueId)
        const data = req.body
     
        console.log(data)
      
        const findo = await EventModel.findOne(
         {uniqueId:uniqueId}
        )
        console.log(findo)
     
     
     
        const updated_data = await EventModel.updateOne(
         {uniqueId:uniqueId},
         {
             $set:data
         }
        )
       
        res.json({message:"Changes made successfully"})
        
    } catch (error) {
        res.json({message:"Failed to save changes"})
    }

   



  
})

router.post('/updatepassword',async(req,res)=>{
    const data = req.body;
   const uniqueId = data.uniqueId
   const currentpassword = data.currentpassword
   const newpassword = data.newpassword

   
    try {
        const user = await EventModel.findOne({uniqueId})
        console.log(uniqueId)
        console.log(user)
        

        if(user){
            console.log("suraj jain")
            console.log(user.Password)
            const passwordMatch = await bcryptjs.compare(currentpassword, user.Password);

            if(passwordMatch){
                console.log("Password Matched")
               const  newhashedpassword = await hashPassword(newpassword)
                const result = await EventModel.updateOne(
                    { uniqueId: uniqueId }, // Filter
                    { $set: { Password: newhashedpassword} } // Update
                
                    );
             const user = await EventModel.findOne({
                uniqueId
             })
             console.log(user.Password)
                    res.send({message:'success'})
            }

            else{
                console.log("Password does not match")
                res.send({message:'No'})
            }
        }
    
    } catch (error) {
        console.log("idht")
        res.send({message:'Failed'})
    }
})

module.exports = router;