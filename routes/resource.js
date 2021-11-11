var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Tablet_controller = require('../controllers/Tablet'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Tablet ROUTES /// 
 
// POST request for creating a Tablet.  
router.post('/Tablets', Tablet_controller.Tablet_create_post); 
 
// DELETE request to delete Tablet. 
router.delete('/Tablets/:id', Tablet_controller.Tablet_delete); 
 
// PUT request to update Tablet. 
router.put('/Tablets/:id', Tablet_controller.Tablet_update_put); 
 
// GET request for one Tablet. 
router.get('/Tablets/:id', Tablet_controller.Tablet_detail); 
 
// GET request for list of all Tablet items. 
router.get('/Tablets', Tablet_controller.Tablet_list); 
 
module.exports = router; 