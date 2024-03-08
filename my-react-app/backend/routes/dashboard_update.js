const express = require("express")
const router = express.Router()
// const event = '../models/event'
const EventModel = require("../models/event")

router.post('/:uniqueId/add_tickets',async(req,res)=>{

    try {
        const uniqueId=req.params;
        const data = req.body
        const user = EventModel.findOne({uniqueId})
        console.log(user)
        res.send(user)
     
        if (user) {
            console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
            let noOfSeats = user.noOfSeats || 0; // Initialize to 0 if user.noOfSeats is undefined
            noOfSeats += req.body.tickets;
        
            try {
                const updated_user = await EventModel.updateOne(
                    { uniqueId },
                    { $set: { noOfSeats: noOfSeats } }
                );
        
                console.log("Updatation Done");
                console.log(updated_user);
            } catch (error) {
                console.error("Error updating user:", error);
            }
        }
        
     
        else{
         res.send("User not found")
        }
    } catch (error) {
        console.log("Error occured in adding the tickets",error)
    }
  
})

router.get('/',(req,res)=>{
    res.send("This is the reaponse")
})
// router.post('/')
router.get('/add_tickets',(req,res)=>{
    res.send("Thi si the page")
})

router.get('/:uniqueId',async(req,res)=>{
    uniqueId = req.params
    res.send("This si the uwniuf",uniqueId)
})

router.get('/:uniqueId/add_tickets',async(req,res)=>{

    try {
        const uniqueId=req.params;
        const data = req.body
        const user = EventModel.findOne({uniqueId})
        console.log(user)
        res.send(user)
    }catch(eroor)
    {
        console.log("eror")
    }
})
module.exports = router;