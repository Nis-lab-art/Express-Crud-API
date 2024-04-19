const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); 
const app = express()
app.use(express.json()); 

app.get('/', (req,res) => {
    res.send("Hello from node api server")
});

app.get('/api/products', async (req,res) => {
    try {
        const response = await Product.find({});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/products/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const response = await Product.findById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/products', async (req,res) => {
    try {
        const response = await Product.create(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://admin:HlR4hFj9d8IzCwJ7@backenddb.1y57xnx.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log('Connected to DB!');
    app.listen(3000, () => {
    console.log("Server is running in port 3000") 
})
    })
    .catch(() => {
        console.log('Not connected');
    });