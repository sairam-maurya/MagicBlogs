const Model =require('../models/blogModel');
const {Router} = require('express');
const router = Router();

router.post('/add',(req,res)=>{
    console.log(req.body);
    // res.send('response from user router');
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        
    });
    
});

router.get('/getall',(req,res)=> {
    Model.find({})
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);      
        
    });

});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);

        });
});

router.delete('/deletebyid/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);

        });
});

router.get('/getbyuserid/:id', (req, res) => {
    Model.find({ user: req.params.id })
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);

        });
});



module.exports=router;
