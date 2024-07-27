const router = require("express").Router();
const asyncErrorHandler = require("../../frameWork/errorController/aysncErrorHandler");
//const succesResponse = require("../../frameWork/service/http.service");
const authController = require("../../frameWork/controller/auth.controller");
const validator = require("../../validator/validator");
const validationService = require("../../frameWork/service/validatorService");

router.post(
  "/signUp",
  validationService.nullCheck,
  asyncErrorHandler(authController.signUp)
);

module.exports = router;
