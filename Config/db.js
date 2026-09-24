// const mongoose = require("mongoose");

// const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("DB Connection Successful");
//     } catch(err) {
//         console.error(err);
//     }
// }
// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connection Successful");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = connectDB;