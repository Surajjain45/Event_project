const express = require('express');
const router = express.Router();
const Audience = require('../models/Audience');


// Retrieve Ticket Info
router.get('/:ticketId', async (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = await Audience.findOne({audienceId: ticketId});

    if (!ticket) {
        return res.status(404).send('Ticket not found');
    }

    res.json(ticket);
});

module.exports = router;
