const express = require("express")
const router = express.Router()
const event = require('../models/event')


router.post('/',async (req,res)=>{
    const {uniqueId,data} = req.body;
    // console.log(req.body)
    // console.log(uniqueId)
    // console.log(data)

    try{
        const user = await event.findOne({uniqueId})
        // console.log(user)
        console.log("working")
        // const exist = true;

        if(!user){
            exist = false;
            console.log("gaya")
            res.json({exist:false})
        }

        else{

            res.json({exist:true})
        }

    }catch (error) {
        console.error('Error during check:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})

module.exports = router