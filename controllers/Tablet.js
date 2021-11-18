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
exports.Tablet_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Tablet.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Tablet create on POST. 
exports.Tablet_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Tablet(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Tablet_type":"goat", "cost":12, "size":"large"} 
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
 
// Handle Tablet delete on DELETE. 
exports.Tablet_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Tablet.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
 
// Handle Tablet update form on PUT. 
exports.Tablet_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Tablet.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Tablet_type)  
               toUpdate.Tablet_type = req.body.Tablet_type; 
        if(req.body.cost) toUpdate.composition = req.body.composition; 
        if(req.body.size) toUpdate.Tablet_features = req.body.Tablet_features; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query 
exports.Tablet_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Tablet.findById( req.query.id) 
        res.render('Tabletdetail',  
{ title: 'Tablet Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a Tablet. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Tablet_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Tabletcreate', { title: 'Tablet Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 