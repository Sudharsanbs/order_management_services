const { body } = require('express-validator');

const validateLogin = [
    body('email').isEmail().normalizeEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
module.exports = {
    validateLogin
}
