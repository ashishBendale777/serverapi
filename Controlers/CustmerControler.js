const Customer = require('../Models/CustomerSchema')

exports.addCustomer = (req, res) => {
    const cust = new Customer({
        CustName: req.body.CustName,
        CustEmail: req.body.CustEmail,
        CustMobNo: req.body.CustMobNo,
        CustPassword: req.body.CustPassword
    })

    cust.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(200).send(err)
        });
}

exports.getAllCustomers = (req, res) => {
    Customer.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}