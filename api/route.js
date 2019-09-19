const express =require('express');
const studentRoutes = express.Router();

let student =require('./StudentDetails');

studentRoutes.route('/add').post(function(req,res){
    let Student =new student(req.body);
    Student.save()
    .then(Student=>{
        res.status(200).json({'Student':'Sudent is added successfully'});
    })
    .catch(err=>{
        res.status(400).send('unable to save to database');
    });
});


studentRoutes.route('/').get(function(req,res){
    student.find(function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });
});


studentRoutes.route('/edit/:id').get(function(req,res){
    let id =req.params.id;
    student.findById(id,function(err,data){
        res.json(data);
    });
});


studentRoutes.route('/update/:id').post(function(req,res){
    student.findById(req.params.id,function(err,data){
        if(!data){
            res.status(404).send("data is not found");
        }
        else{
            data.person_name =req.body.person_name;
            data.Item_name =req.body.Item_name;
            data.MobileNo =req.body.MobileNo;

            data.save().then(data=>{
                res.json('update complete');
            })
            .catch(err=>{
                res.status(400).send('unable to update the database');
            });
        }
    });
});

studentRoutes.route('/delete/:id').get(function(req,res){
    student.findByIdAndRemove({_id:req.params.id},function(err,data){
        if(err){
            res.json(err);
        }
        else{
            res.json('successfully removed');
        }
    })
});
module.exports=studentRoutes;