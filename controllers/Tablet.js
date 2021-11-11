var Tablet = require('../models/Tablet'); 
 
// List of all Tablet 
exports.Tablet_list = async function(req, res) { 
    try{ 
        theTablets = await Tablet.find(); 
        res.send(theTablets); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Tablet. 
exports.Tablet_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tablet detail: ' + req.params.id); 
}; 
 
// Handle Tablet create on POST. 
exports.Tablet_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tablet create POST'); 
}; 
 
// Handle Tablet delete form on DELETE. 
exports.Tablet_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tablet delete DELETE ' + req.params.id); 
}; 
 
// Handle Tablet update form on PUT. 
exports.Tablet_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tablet update PUT' + req.params.id); 
}; 
