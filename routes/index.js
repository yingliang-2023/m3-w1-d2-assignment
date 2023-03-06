const express = require('express');
const router=express.Router();
const {check, validationResult} = require('express-validator');

router.get('/',(req,res)=>{
    res.render('form', {title:'Registration Form'});
});

router.post('/',
   
    [
    check('name')
    .isLength({min:1})
    .withMessage('Please enter your name'),
    check('email')
    .isLength({min:1})
    .withMessage('Please enter your email'),
],

(req,res)=>{

    //console.log(req.body);
    const errors = validationResult(req);
    if(errors.isEmpty()){
        res.send('Form Submitted');
    }else{
        res.render('form', {title:'Registration Form',errors:errors.array(), data:req.body});

      }
      });
   



module.exports=router;