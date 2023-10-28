
const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    imagen:{
        required: false,
        type: String
    },
    categoria:{
        required: true,
        type: String,
        enum: ['fria', 'caliente'],
    },
    descripcion:{
        required: false,
        type: String
    },
    }
);

module.exports = mongoose.model('Bebida', drinkSchema);