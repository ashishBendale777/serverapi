const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    OrderDate: { type: Date, default: new Date() },
    OrderTotal: Number,
    OrderSize: Number,
    CustId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    
})

module.exports = mongoose.model('Order', OrderSchema)