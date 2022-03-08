const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: {type:String , required:true},
    fatherName: {type:String , required:true},
    seatNo: {type:String , required:true, unique:true},
    enroll: {type:String, required:true, unique:true},
    group: {type:String, required:true },
},
{timestamps:true});

module.exports = mongoose.model("Student",StudentSchema)