// Some issues with the DNS I guess, this fixed it
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

require('dotenv').config()

const express = require("express");
const cors = require("cors");
const User = require("./models/User")

const app = express();

const mongoose = require('mongoose');

// MongoDB Atlas url
const url = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

mongoose.set('strictQuery', false);

// Connect to MongoDB Atlas
mongoose.connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log('error connecting to MongoDB:', error.message);
  });


// Routes

app.get("/", (req, res) => {
  res.send("Workout API running");
});

app.get("/api/users/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username})

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        res.json(user)
    } catch (error) {
        res.status(404).json({ error: "User not found"})
    }
})


app.post("/api/users", async (req, res) => {
    try {
        const { username } = req.body

        const existing = await User.findOne({ username })

        if (existing) {
            return res.json(existing)
        }

        const user = new User({
            username,
            maxes: {
            squat: 0,
            bench: 0,
            deadlift: 0,
            press: 0
        },
        history: []
        })

        const savedUser = await user.save()

        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


app.put("/api/users/:username/maxes", async (req, res) => {
    try {
        const { squat, bench, deadlift, press } = req.body

        const user = await User.findOne({ username: req.params.username})

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        user.maxes = { squat, bench, deadlift, press }

        user.history.push({
            date: new Date(),
            squat,
            bench,
            deadlift,
            press
        })

        const saved = await user.save()

        res.json(saved)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


app.get("/api/users/:username/history", async (req, res) => {
  try {

    const user = await User.findOne({ username: req.params.username })

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    res.json(user.history)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})