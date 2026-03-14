const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    date: Date,
    squat: Number,
    bench: Number,
    deadlift: Number,
    press: Number
})

const userSchema = new mongoose.Schema({
  username: String,
  maxes: {
    squat: Number,
    bench: Number,
    deadlift: Number,
    press: Number
  },
  history: [historySchema]
});

module.exports = mongoose.model("User", userSchema);