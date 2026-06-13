const express = require("express");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Backend is running successfully 🚀");
});


// Server setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});