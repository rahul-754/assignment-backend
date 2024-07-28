// backend/models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type : String,
        required:true,
    },
    email:{
       type :  String,
       unique: true,
       required:true,
    } ,
    mobile: {
        type : String,
        required:true,
    },
    designation:{
        type : String,
        rquired:true,
    } ,
    gender:{
        type : String,
        required:true,
    } ,
    course: {
        type : [String],
        required:true,
    },
    image:{
       type: String,
    },
  
    createdAt: { 
        type: Date,
         default: Date.now 
    }
});

employeeSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, "jghddfgxcguytytv", {
        expiresIn: '1h'
    });
};

module.exports = mongoose.model('Employee', employeeSchema);