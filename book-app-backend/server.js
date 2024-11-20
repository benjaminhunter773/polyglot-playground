require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const app = express(); // Correct placement

// Enable CORS
app.use(cors());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Updated to match consistent naming
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Endpoint to generate signature
app.get('/get-signature', (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      upload_preset: 'ml_default',
    },
    process.env.CLOUDINARY_API_SECRET
  );
  res.json({ signature, timestamp });
});

// Start the server
const PORT = process.env.PORT || 3000; // Adjust as needed
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
