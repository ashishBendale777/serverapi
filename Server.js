const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')


//
const multer = require('multer')
const path = require('path')


const server = new express()
server.use(bodyparser.json())

//storage config
const fileStorage = multer.diskStorage({
    destination: 'Uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

//upload config
const uploadConfig = multer({
    storage: fileStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Upload Correct file'))
        }
        cb(undefined, true)
    }
})


server.post('/uploadfile', uploadConfig.single('image'), (req, res) => {
    res.status(200).json({
        filepath: "/images/".concat(req.file.filename),
        uploaded: true
    })
}, (err, req, res, next) => {
    res.status(400).send({ error: err.message })
})


//database connectivity
mongoose.connect('mongodb://127.0.0.1:27017/exampledb', {
    useNewUrlParser: true
}).then((result) => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("Not Connected")
});

server.get('/', (req, res) => {
    res.send("Hi...")
})

server.get('/users', (req, res) => {
    const usrs = ["Ashish", "Sam", "Amol"]
    res.send(usrs)
})

server.post('/adduser', (req, res) => {
    const user = {
        UserName: req.body.UserName,
        UserPassword: req.body.UserPassword,
        UserEmail: req.body.UserEmail,
    }

    res.status(200).json(user)
})


const routes = require('./Routes/Routes')
server.use('/api/', routes)


server.listen(5000, () => {
    console.log("Server Started")
})
