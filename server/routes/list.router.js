const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET current grocery list
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM list';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error in GET request', error);
    }); 
});


module.exports = router;