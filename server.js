const express = require('express');
const router = require('./routes/login');
const productsroute = require('./routes/productsRoute');
const orderRoute = require("./routes/orderRoute");
const registerRoute = require("./routes/register")
const connectDB = require('./Config/db');
const PORT = 3001;
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

app.use(cors("http://localhost:3001"));
app.use(express.json());

dotenv.config();
connectDB();
app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.use("/app", router);
app.use("/view", productsroute);
app.use("/checkout", orderRoute);
app.use("/app", registerRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong on the server" });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});