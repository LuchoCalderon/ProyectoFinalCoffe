const mongoose = require('mongoose');

const URI = 'mongodb+srv://luchocalderon16:1234@cluster0.wzhcsql.mongodb.net/movie';

mongoose.conect(URI)
    .then(db)