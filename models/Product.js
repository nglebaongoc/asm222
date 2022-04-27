var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required:true},
    price: {type: Number},
    picURL: {type: String},
    madein: {type: String}
})

module.exports = mongoose.model('Product', ProductSchema)