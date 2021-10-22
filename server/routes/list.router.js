const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET current grocery list
router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM list
    ORDER BY "id"
    ;`
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

//DELETE grocery list
router.delete('/', (req, res) => {
    const sqlText = 'DELETE FROM list'

    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error deleting list`, error);
            res.sendStatus(500);
        });
})

//PUT grocery list
router.put('/', (req, res) => {
    const sqlText = 'UPDATE list SET purchased = FALSE;'

    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error updating`, err);
            res.sendStatus(500);
        })
})

//DELETE grocery list item
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    let val = [id];

    const sqlText = `
    DELETE FROM list
    WHERE id = $1
    ;`

    pool.query(sqlText, val)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error deleting list`, error);
            res.sendStatus(500);
        });
})

//PUT grocery list item
router.put('/:id', (req, res) => {
    const id = req.params.id;
    let val = [id];

    const sqlText = `
    UPDATE list 
    SET purchased = TRUE
    WHERE id = $1
    ;`

    pool.query(sqlText, val)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error updating`, err);
            res.sendStatus(500);
        })
})

module.exports = router;