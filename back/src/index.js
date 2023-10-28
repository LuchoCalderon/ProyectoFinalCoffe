const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
require("dotenv").config();
const drinkRoutes = require("./routes/bebida");
const filmRoutes = require("./routes/film")


//settings
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use('/api', drinkRoutes);
app.use('/api', filmRoutes);




//routes
app.get('/', (req, res) =>{
    res.send('Bienvenido a mi Coffee Shop');
});
//conexion mongo
mongoose
    .connect(process.env.MONGODB_CONECTION)
    .then(() => console.log('Conectado a la BD de manera exitosa'))
    .catch((error) => console.error(error));

//starting the server
app.listen(port, () => console.log('servidor en puerto', port));