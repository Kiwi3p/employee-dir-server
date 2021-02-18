const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
  picture: {
    thumbnail: String,
  },
  gender: String,
  location: {
    city: String,
    state: String,
  }
});

const Name = mongoose.model("Name", nameSchema);

module.exports = Name;
