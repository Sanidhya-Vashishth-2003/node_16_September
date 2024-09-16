const users = require('../users.json');
function getuser(req,res) {
try {
    res.json(users)
    
} catch (error) {
    
}
}
function getparticularuser (req,res){
try {
    

    let id = parseInt(req.params.id);
    let user = users.find((user)=> user.id === id);
    res.json(user);
} catch (error) {
    



}




}
module.exports ={
    getuser,
    getparticularuser
}