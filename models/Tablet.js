const mongoose = require("mongoose") 
const TabletSchema = mongoose.Schema({ Tablet_type: {type: Number, min:1, max:100}, composition: {type: String, minlength: 2, maxlength: 10}, Tablet_features: String }) 
 
module.exports = mongoose.model("Tablet", TabletSchema)