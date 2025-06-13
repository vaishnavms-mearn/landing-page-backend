//connect node js and mongo db
const mongoose = require("mongoose");
const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDb connection established");
  })
  .catch(() => {
    console.log("MongoDb connection error");
  });
