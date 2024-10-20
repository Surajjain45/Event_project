const express = require("express")
const EventModel = require("../models/event")
const router = express.Router()
const eventController = require('../controllers/eventController')
const bcryptjs = require("bcryptjs")

router.post('/',async(req,res)=>{

    // const data = req.body
    let password = req.body.password

    const uniqueId= req.body.uniqueId

   const user =await EventModel.findOne({uniqueId:uniqueId})
//    user.$set({Password:password})
if(user){
    console.log('old',user.Password)
password = await hashPassword(password)
// console.log

console.log('This is the user',user)
   const result = await EventModel.updateOne(
    { uniqueId: uniqueId }, // Filter
    { $set: { Password: password} } // Update

    );
    
    res.send({message:'success'})

}



else{
    console.log("user does not exist")
    res.send({message:'Failed'})
}
// console.log(result)
})

router.get('/',async(req,res)=>{
    res.send("thi si ");
})
async function hashPassword(password) {
    const saltRounds = 10;
    return bcryptjs.hash(password, saltRounds);
  }
module.exports = router