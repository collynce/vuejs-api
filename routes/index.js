const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey';

const dataArray = [];

router.post('/login', function (req, res, next) {
  const myToken = req.header('Authorization').replace('Bearer ', '');
  const payload = jwt.verify(myToken, process.env.SECRET_KEY);
  console.log(payload);
    res.send(dataArray)
});

router.post('/register', function (req, res, next) {
    const accessToken = jwt.sign({id: res.id}, SECRET_KEY);
    dataArray.push({'token':accessToken, 'info':req});
    console.log(dataArray);
    res.send()
});

module.exports = router;


