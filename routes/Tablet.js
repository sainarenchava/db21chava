var express = require('express');
const Tablet_controlers= require('../controllers/Tablet');
var router = express.Router();

/* GET home page. */
router.get('/', Tablet_controlers.Tablet_view_all_Page);

/* GET detail Tablet page */ 
router.get('/detail', Tablet_controlers.Tablet_view_one_Page); 

/* GET create Tablet page */ 
router.get('/create', Tablet_controlers.Tablet_create_Page); 

module.exports = router;
