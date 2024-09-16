const users = require('../users.json');
function getuser(req,res) {
try {
    res.json(users)
    
} catch (error) {
    
}
}
module.exports ={
    getuser
}