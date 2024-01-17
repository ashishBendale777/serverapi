const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    CustName: String,
    CustEmail: String,
    CustMobNo: Number,
    CustPassword: String,
    JoiningDate: { type: Date, default: new Date() },
    CustGender: { type: String, enum: ['Male', 'Female'] },
    CustAge: { type: Number, min: [18, "Age should be more than 18"] }

})

module.exports = mongoose.model('Customer', CustomerSchema)