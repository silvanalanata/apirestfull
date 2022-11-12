const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    title: {type: String, require: [true, 'title obligatorio']},
    description:   {type: String},
    completed:   {type: Boolean}
},{timestamps: true })


const ApiModel = mongoose.model('apimodel',UserSchema)
module.exports = ApiModel
