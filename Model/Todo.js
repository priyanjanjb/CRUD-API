const mongoose = require("mongoose");
//this the way that data add to the DB
const TodoSchema = new mongoose.Schema({//object
  
  
  // donorID: {
  //   type: Boolean,
  //   default: false,
  // },
  donorName: {
    type: String,
    required: true,
  },
  bloodCapacity: {
    type: String,
    required: true,//if we want to add title to this must include 
  },
  bloodType :{
    type : String,
    required : true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);//('table name',schema that we create )
//have to export otherwise cant use