const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/datosapi_db', {useNewUrlParser: true});

module.exports = mongoose