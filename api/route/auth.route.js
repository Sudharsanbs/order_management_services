const router = require("express").Router();
const asyncErrorHandler = require("../../frameWork/errorController/aysncErrorHandler");
//const succesResponse = require("../../frameWork/service/http.service");
const authController = require("../../frameWork/controller/auth.controller");
router.post("/signUp",
    asyncErrorHandler(authController.signUp)
)
module.exports = router;