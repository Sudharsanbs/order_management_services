const Sequelize = require("sequelize");
 model = {
    id : {
        type : Sequelize.STRING,
        primaryKey : true,
    },
    profileId : {
        type : Sequelize.STRING,
    },
    password : {
        type : Sequelize.STRING,
    },
    phoneNumber : {
        type : Sequelize.STRING
    }

}
module.exports = {
    model
}
