let mongoose = require("mongoose");

let baseballModel = mongoose.Schema({
    name: String,
    age: String,
    position: String,
    avg: String,
    },
    {
        collection: "baseball_players"
    }
);
module.exports=mongoose.model('employee_record', baseballModel);

