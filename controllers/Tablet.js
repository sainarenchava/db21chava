var Tablet = require('../models/Tablet'); 
 
// List of all Tablet 
exports.Tablet_list = async function(req, res) { 
    try{ 
        theTablet = await Tablet.find(); 
        res.send(theTablet); 
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
exports.Tablet_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Tablet(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.Tablet_type = req.body.Tablet_type; 
    document.composition = req.body.composition; 
    document.Tablet_features = req.body.Tablet_features; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle Tablet delete form on DELETE. 
exports.Tablet_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tablet delete DELETE ' + req.params.id); 
}; 
 
// Handle Tablet update form on PUT. 
exports.Tablet_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tablet update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.Tablet_view_all_Page = async function(req, res) { 
    try{ 
        theTablet = await Tablet.find(); 
        res.render('Tablet', { title: 'Tablet Search Results', results: theTablet }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 