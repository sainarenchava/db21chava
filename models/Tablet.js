const mongoose = require("mongoose") 
const TabletSchema = mongoose.Schema({ Tablet_type: String, composition: String, features: Number }) 
 
module.exports = mongoose.model("Tablet", TabletSchema)