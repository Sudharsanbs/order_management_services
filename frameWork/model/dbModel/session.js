const Sequelize = require("sequelize");

model = {
    id : {
        type : Sequelize.STRING,
        primaryKey : true
    },
    profileId : {
        type : Sequelize.STRING,
    }
}
module.exports = {
    model
}