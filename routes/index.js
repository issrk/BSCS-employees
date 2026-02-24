const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');


//Route to get all users
router.get('/users',userController.getAllUsers);
//Route to search a user by id
router.get('/users/:id',userController.getUserById);

module.exports=router;
