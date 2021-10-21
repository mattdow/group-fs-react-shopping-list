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

// POST grocery list 
router.post('/', (req, res) => {
    const newGrocery = [req.body.item, req.body.quantity, req.body.unit, req.body.purchased];
    console.log(newGrocery);
    console.log(req.body);

    const sqlText = 'INSERT INTO list ("item", "quantity", "unit", "purchased" ) VALUES ($1, $2, $3, $4);'

    pool.query(sqlText, newGrocery)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;

