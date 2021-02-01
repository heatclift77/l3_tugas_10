const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    nama : {
        type : String,
        required : true
    },
    keterangan : {
        type : String,
        required : true
    },
    harga : {
        type : Number,
        required : true
    },
    jumlah : {
        type : Number,
        required : true
    }
},{
    timestamps : true
});

module.exports = mongoose.model('product', Product);