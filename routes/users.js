const express = require('express');
const router = express.Router();
const axios = require('axios');

let postsArray = [];

// router.get('/', function (req, res, next) {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.data)
//         .then(posts=>{
//             postsArray.push(posts);
//             console.log(postsArray);
//             res.send(postsArray);
//         })
//         .catch(error => {
//             res.send(error);
//         });
// });
router.get('/', function (req, res, next) {
    res.send(postsArray);
});

router.post('/post', function (req, res, next) {
        const data = req.body;
        postsArray.push(data);
        res.send(postsArray)
});

module.exports = router;
