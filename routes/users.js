var express = require('express');
var router = express.Router();
const {User} = require('../lib/models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let currentUser = await User.findAll({})
  res.json(currentUser);
});

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  let currentUser = await User.findAll({where:{id:req.params.id}})
  res.json(currentUser);
});

module.exports = router;
