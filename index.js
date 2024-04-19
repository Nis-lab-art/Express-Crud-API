const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/product.routes.js');
const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/products', productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node api server");
});

mongoose
  .connect(
    "mongodb+srv://admin:HlR4hFj9d8IzCwJ7@backenddb.1y57xnx.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DB!");
    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch(() => {
    console.log("Not connected");
  });
