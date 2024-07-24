const { Sequelize } = require("sequelize");
const authDbDef = require("./dbModel/auth");
const userCredentialsDbDef = require("./dbModel/userCredentials");
const sessionDbDef = require("./dbModel/session");

const authobj = new Sequelize(require("../../config/local.config").development);



const profileDbDefs = authobj.define("profile", authDbDef.model, {
  timestamps: true,
  tableName: "profile",
});

const userCredentialsDbDefs = authobj.define(
  "userCredentials",
  userCredentialsDbDef.model,
  {
    timestamps: true,
    tableName: "userCredential",
  }
);
const sessionDbDefs = authobj.define("session",
    sessionDbDef.model,{
        timestamps : true,
        tableName : "session"
    }
)
authobj.authenticate();
authobj.sync({alter:true});

module.exports = {
  profileDbDefs,
  userCredentialsDbDefs,
  sessionDbDefs
};
