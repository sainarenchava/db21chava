var express = require('express');
const Tablet_controlers= require('../controllers/Tablet');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', Tablet_controlers.Tablet_view_all_Page);

/* GET detail Tablet page */ 
router.get('/detail', Tablet_controlers.Tablet_view_one_Page); 

/* GET create Tablet page */ 
router.get('/create',secured, Tablet_controlers.Tablet_create_Page); 

/* GET create update page */ 
router.get('/update',secured, Tablet_controlers.Tablet_update_Page);

/* GET create Tablet page */ 
router.get('/delete',secured, Tablet_controlers.Tablet_delete_Page); 

module.exports = router;
