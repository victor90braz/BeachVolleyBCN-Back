const { Schema, model } = require("mongoose");

const PlayerSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  image: { String },
  keywords: { String },
  like: { Number },
  point: { Number },
  rate: { Number },
  game: { Number },
});

const Player = model("Player", PlayerSchema, "players");
module.exports = Player;
