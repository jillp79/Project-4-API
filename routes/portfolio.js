var express = require('express');
var router = express.Router();
const {Portfolio} = require('../lib/models');
const yahooStockPrices = require('yahoo-stock-prices')
const si = require('stock-info');

// DELETE - perform DELETE request on http://localhost:3000/api/v1/stocks/:id - STEP 1 Done | STEP 2 - Perform Actual Queries
// UPDATE - perform PUT request on http://localhost:3000/api/v1/stocks/:id - STEP 1 Done | STEP 2 - Perform Actual Queries
// CREATE - - perform POST request on http://localhost:3000/api/v1/stocks - STEP 1 Done | STEP 2 - Perform Actual Queries

// NON-REST - CUSTOM
// GET /api/v1/stocks/search?symbol=AAPL
// GET /api/v1/stocks/search/AAPL
// GET /api/v1/stocks/search/MSFT
// POST /api/v1/stocks/search req.body

router.get('/search/:symbol', async function(req, res, next) {
    console.log(req.query)
    console.log(req.params)
    try {
        const data = await si.getSingleStockInfo(req.params.symbol);
        console.log(data);
        res.json({success: true, data: data});
    } catch(err){
        res.json({success: false, data: {}});
    }

})

// CREATE
router.post('/', async function(req, res, next) {
    console.log(req.body)
    let stock = await Portfolio.create(req.body);
    // Stock.create(req.body)
    //     .then((stock) => {
    //         res.json({success: true});
    //     })

    res.json(stock);
});

// UPDATE
router.put('/:id', async function(req, res, next) {
 
    let stock = await Portfolio.update(req.body, {
        where: {id: req.params.id}
    });
    res.json(stock);
});

// DELETE
router.delete('/:id', async function(req, res, next) {
    // console.log(req.params)
    let dog = await Portfolio.destroy({where: {id: req.params.id}});
    res.json(dog);
});


/* GET portfolio by listing. */
router.get('/:id', async function(req, res, next) {
    let items = await Portfolio.findAll({where: {userId: req.params.id}});
    console.log(items);
    res.json(items);
});

module.exports = router;
