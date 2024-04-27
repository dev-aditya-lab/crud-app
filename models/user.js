const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aditya');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    url: String,
})


module.exports = mongoose.model("user", userSchema);