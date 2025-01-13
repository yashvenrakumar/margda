const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const accountRoutes = require("./routes/accountRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/api/accounts", accountRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
