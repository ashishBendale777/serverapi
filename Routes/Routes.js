const express = require('express')
const router = express.Router()

const CustController = require('../Controlers/CustmerControler')
router.post('/addcustomer', CustController.addCustomer)
router.get('/getallcustomers', CustController.getAllCustomers)
router.post('/deletecustomer', CustController.deleteCustomer)
router.post('/updatecustomer', CustController.updatecustomer)


//


//


module.exports = router