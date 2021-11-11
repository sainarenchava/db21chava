var express = require('express');
const Tablet_controlers= require('../controllers/Tablet');
var router = express.Router();

/* GET home page. */
router.get('/', Tablet_controlers.Tablet_view_all_Page);
module.exports = router;
