const Customer = require('../Models/CustomerSchema')

exports.addCustomer = (req, res) => {
    const cust = new Customer({
        CustName: req.body.CustName,
        CustEmail: req.body.CustEmail,
        CustMobNo: req.body.CustMobNo,
        CustPassword: req.body.CustPassword,
        CustGender:req.body.CustGender,
        CustAge:req.body.CustAge
    })

    // {
    //     "CustName": "Ashish",
    //     "CustEmail": "ashish@gmail.com",
    //     "CustMobNo": 23423424,
    //     "CustPassword": "asd323"
    // }

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

exports.deleteCustomer = (req, res) => {
    Customer.deleteOne({ _id: req.body.cid })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.updatecustomer = (req, res) => {
    Customer.findByIdAndUpdate(
        { _id: req.body.cid },
        { CustPassword: req.body.newpassword },
        { new: true })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
