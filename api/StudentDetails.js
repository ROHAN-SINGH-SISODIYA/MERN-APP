const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let Student =new Schema({
    person_name:{
        type:String
    },
    Item_name:{
        type:String
    },
    MobileNo:{
        type:Number
    }
},{
    collection:'Student'
});

module.exports =mongoose.model('Student',Student);