const mongoose = require("mongoose");

const WordSchema = mongoose.Schema({
    TableId: mongoose.Schema.Types.ObjectId,
    name: String,
    badword:{
        type:Array,
        default:[]
    },
    racism:{
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("Word",WordSchema);