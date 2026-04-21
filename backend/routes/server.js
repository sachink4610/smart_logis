const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const trackingRoutes = require('./routes/tracking');
app.use('/api/track', trackingRoutes);

app.get('/', (req, res) => {
    res.send('Logi-API is pushing weight! 💪');
});

app.listen(PORT, () => {
    console.log(`🚀 Logistics Engine running on http://localhost:${PORT}`);
});