const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Cloud 🌐"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/track/:id', (req, res) => {
    res.json({ 
        orderId: req.params.id, 
        status: 'Vibing in transit 🚚', 
        location: 'Bangalore Hub' 
    });
});

app.listen(5000, () => console.log('Server running on port 5000 🔥'));