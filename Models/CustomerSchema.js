const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    CustName: String,
    CustEmail: String,
    CustMobNo: Number,
    CustPassword: String
})

module.exports = mongoose.model('Customer', CustomerSchema)