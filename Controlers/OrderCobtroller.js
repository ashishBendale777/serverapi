const Order = require('../Models/OrderSchema')

exports.addOrder = (req, res) => {
    const ord = new Order({
        OrderTotal: req.body.OrderTotal,
        OrderSize: req.body.OrderSize,
        CustId: req.body.CustId
    })

    // {
    //     "OrderTotal": 34234,
    //     "OrderSize": 3,
    //     "CustId": "65a63d32e28ffd35c7ddca88"
    // }

    ord.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(200).send(err)
        });
}


exports.getAllOrders = (req, res) => {
    Order.find()
        .populate('CustId',"CustName CustMobNo")
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}