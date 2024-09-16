const express = require('express')
const Usercontroller = require('../controllers/usercontroller')
const router= express.Router();


router.get('/users', (req, res) =>{
    Usercontroller.getuser(req,res);
    
})
router.get('/users/:id',(req,res)=>{

Usercontroller.getparticularuser(req,res)

})
module.exports = router;