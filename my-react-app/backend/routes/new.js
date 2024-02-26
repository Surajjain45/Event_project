const express = require("express")
const router = express.Router()

router.get('/new',function(req,res){
    res.send(("This is the page"))
})

module.exports = router