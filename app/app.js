const express = require('express');
const bodyParser = require('body-parser');


const accounts = require('./accounts'); 
const inventory = require('./inventory');
const orders = require('./orders');


const app = express();


const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Endpoints

// Home
app.get('/', (req, res) => res.send('Vedantu'))

// Add account
app.post('/add-user', accounts.addUser);

// Add product in inventory 
app.post('/add-product', inventory.addProduct);

// Add product in inventory 
app.post('/place-order', orders.placeOrder);



app.listen(PORT, () => console.log(`listening on PORT ${PORT}!`))