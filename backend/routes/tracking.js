const express = require('express');
const router = express.Router();

// Mock data for testing (Replace with MongoDB later)
const shipments = {
    "FLUX123": { status: "Out for Delivery", location: "Bangalore", eta: "2 hours", vibe: "Urgent ⚡" },
    "FLUX456": { status: "At Warehouse", location: "Electronic City", eta: "1 day", vibe: "Chilled 🧊" }
};

router.get('/:id', (req, res) => {
    const shipment = shipments[req.params.id.toUpperCase()];
    
    if (shipment) {
        res.json({ success: true, data: shipment });
    } else {
        res.status(404).json({ success: false, message: "Package ghosted us. ID not found." });
    }
});

module.exports = router;