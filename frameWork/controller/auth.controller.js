const dbService = require("../service/dbService");
const authDb = require("../model/authDbDefs");
const customError = require("../errorController/custom.error");
async function signUp(req,res){
    console.log("rhfr");
    res.json("succhdfjk");
    const criteria = { phoneNumber : req.body.phoneNumber};
    const existingUser  = await dbService.find(authDb.userCredentialsDbDefs,criteria);
    res.json("succhdfjk");
    if(existingUser.length === 0 ){
        throw new customError();
    }
}
module.exports = {
    signUp
}