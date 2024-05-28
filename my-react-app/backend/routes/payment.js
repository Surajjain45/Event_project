const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const stripe = require("stripe")("sk_test_51OlwghSExm8g8tzTYZgZiAixHJEkB5yyDkqNMyEgI07c4iuJGR4pd3GeUf3xv9HRBSdrZsfVHRz7WxRequhMmNeu00MIeYzuiC")


router.post("/" , async(req , res)=> {
    const {audienceData} = req.body;
    console.log("Audience Dataa : ", audienceData);
    const {price , eventId , amountt} = req.body;
    console.log("ammount :: " , amountt)
    console.log("prince :: " , price)
    console.log("eventid :: " , eventId)
    

    const lineItems = [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Ticket for Event ${eventId}`,
          },
          unit_amount: price * 100, 
        },
        quantity: amountt,
      }];

const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    success_url: `http://localhost:5173/success?eventId=${eventId}&audienceData=${encodeURIComponent(JSON.stringify(audienceData))}`,
    cancel_url: "http://localhost:5173/cancel",

})

res.json( {id : session.id});
});

module.exports = router;