const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey';

const dataArray = [];


router.get('/', function (res, req, next) {
    req.send('index')
});

router.post('/login', function (req, res, next) {
  // const myToken = req.header('Authorization').replace('Bearer ', '');
  const payload = req.body;
  console.log(payload);
    res.status(200).send(dataArray)
});

router.post('/register', function (req, res, next) {
    // const accessToken = jwt.sign({id: res.id}, SECRET_KEY);
    let token = jwt.sign({ id: res.id }, SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
    });
    // res.status(200).send({ auth: true, token: token, user: user });
    dataArray.push({token:token, user:req.body});
    console.log(dataArray);
    res.status(200).send({token:token, user:req.body});
});

module.exports = router;


