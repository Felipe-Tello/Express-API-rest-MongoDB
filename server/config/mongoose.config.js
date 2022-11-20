const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/petsdb", {
   useNewUrlParser: true,
   useUnifiedTopology: true 
})
    .then(() => console.log("Connected with DB"))
    .catch(err => console.log("Error connecting with DB "+err));