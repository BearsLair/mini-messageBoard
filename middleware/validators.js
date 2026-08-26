const { body } = require("express-validator");

// Form input validation rules
exports.validators = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty.")
    .isAlpha()
    .withMessage("Name must only contain alphabet letters.")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long.")
    .isLength({ max: 10 })
    .withMessage("Name must be no more than 10 characters."),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message cannot be empty.")
    .isLength({ min: 5 })
    .withMessage("Message must be at least 3 characters long.")
    .isLength({ max: 100 })
    .withMessage("Message must be no more than 100 characters."),
];
