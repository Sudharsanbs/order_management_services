const Sequelize = require("sequelize");
model = {
   id : {
    type : Sequelize.STRING,
    primaryKey : true,
   },
   firstName :{
    type :  Sequelize.STRING,
   },
   lastName : {
    type : Sequelize.STRING,
   },
   age : {
    type : Sequelize.INTEGER,
   },
   gender : {
    type : Sequelize.STRING,
   },
   DOB : {
    type : Sequelize.DATEONLY,
   },
   photoPath : {
    type : Sequelize.STRING,
   }
}
module.exports = {
    model
}