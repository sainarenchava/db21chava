const mongoose = require("mongoose") 
const TabletSchema = mongoose.Schema({ Tablet_type: Number, composition: String, Tablet_features: String }) 
 
module.exports = mongoose.model("Tablet", TabletSchema)