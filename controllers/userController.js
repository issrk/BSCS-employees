//SQL
const connection=require('../config/db');
//Get all users
exports.getAllUsers=(req,res)=>{
    connection.query('SELECT * FROM userdata',(err,rows,fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};  


//Search a user by id
exports.getUserById=(req,res)=>{
    const id= req.params.id;
    connection.query('SELECT * FROM userdata WHERE id=?',[id],(err,rows,fields)=>{
        if(err) throw err;
        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message:'User not found'});
    });
}

//delete a user 
//crud delete
export.deleteUser = (req, res) => {
    
}