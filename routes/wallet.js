var express = require('express');
var router = express.Router();
const {Wallet} = require('../lib/models');



// UPDATE - perform PUT request on http://localhost:3000/api/v1/wallet/:id
router.put('/:id', async function(req, res, next) {

    let currentWallet = 
    await Wallet.update(
        {value: req.body.value},
        {returning: true, where: {id: req.params.id} }
      )
    console.log(currentWallet);
    res.json(currentWallet);
});



/* GET users listing. */
router.get('/:id', async function(req, res, next) {

    let currentWallet = await Wallet.findAll({where:{id:req.params.id}})
    console.log(currentWallet);
    res.json(currentWallet);
});

module.exports = router;
