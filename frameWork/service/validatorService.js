const { body, validationResult } = require("express-validator");
const { idText } = require("typescript");
const validateLogin = [
  body("email").isEmail().normalizeEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    next();
  },
];

let testJson = {
  signUp: [
    {
      value: "session-id",
      test: "headers",
      errorMsg: "session is missing",
    },
    {
      value: "email",
      test: "body",
      errorMsg: "email is missing",
    },
  ],
};

async function nullCheck(req, res, next) {
  for (const data of testJson.signUp) {
    if (!req[data.test][data.value]) {
      console.dir(data.errorMsg, { depth: null, colors: true });
    }
    //   (req, res, next) => {
    //     const errors = validationResult(req);

    //     if (!errors.isEmpty()) {
    //       return res.status(400).json({
    //         errors: errors.array(),
    //       });
    //     }
    //     next();
    //   },

    let red = "kuy";
    let emailTest = body(red).isEmail().normalizeEmail().withMessage("kuytt");
    const errors = validationResult(emailTest);
    console.dir(errors.array(), { depth: null, colors: true });
  }

  //   const sessionId = req.headers["session-id"];
  //   const body = req.body;
  //   //   if(sessionId === undefined){
  //   //     res.json({error:"sessionId is not provided in headers"})
  //   //   }
  //   //   else if(sessionId === null){
  //   //     res.json({error:"session value should be provided"})
  //   //   }
  //   requriedArray = ["session-id", "email", "password"];
  //   keyArray = [];
  //   errorArray = [];
  //   const keys = Object.keys(req.body);
  //   keyArray.push(...keys);
  //   keyArray.push("session-id");
  //   console.log(keyArray);
  //   for (const ele of requriedArray) {
  //     console.log(ele);
  //     if (!keyArray.includes(ele)) {
  //       errorArray.push(`requried${ele}`);
  //     }
  //   }
  //   console.log(errorArray);
  //   if (errorArray.length !== 0) {
  //     res.json({ error: errorArray });
  //   }
  next();
}

module.exports = {
  validateLogin,
  nullCheck,
};
