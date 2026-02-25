const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// API route for GPS data
app.post('/api/gps', (req, res) => {
    const { latitude, longitude } = req.body;
    // Logic to handle GPS data
    res.json({ message: 'GPS data received', latitude, longitude });
});

// API route for fuel sensor data
app.post('/api/fuel', (req, res) => {
    const { fuelLevel } = req.body;
    // Logic to handle fuel sensor data
    res.json({ message: 'Fuel sensor data received', fuelLevel });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
