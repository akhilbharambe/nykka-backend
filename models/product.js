const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50},
  picture: {type: String,required: true},
  description: {type: String },
  gender: {type: String,enum: ['male', 'female']},
  category: {type: String,enum: ['makeup', 'skincare', 'haircare'] },
  price: {type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: {type: Date,default: Date.now}
});

const Product = mongoose.model('Product', productSchema);


module.exports = Product;
