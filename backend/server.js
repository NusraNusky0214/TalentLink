const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());

mongoose
  .connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/talentlink"
  )
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });


app.get("/", (req, res) => {
  res.send("🚀 TalentLink API Running");
});


app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "TalentLink API is running",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected"
  });
});


const projectRoutes = require("./routes/projectRoutes");
const reviewRoutes = require("./routes/reviewRoutes");


app.use("/api/projects", projectRoutes);
app.use("/api/reviews", reviewRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});