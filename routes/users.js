const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', function (req, res, next) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});
router.post('/post', function (req, res, next) {
    axios.post('https://jsonplaceholder.typicode.com/posts', req.body).then(res => {
        console.log(res.data)
    }).catch(error => {
            res.send(error);
        });
});

module.exports = router;
