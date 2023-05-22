const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const formRegisterContact = async (req, res, next) => {
  await check("name")
    .trim()
    .notEmpty()
    .withMessage("Empty Name field")
    .run(req);
  await check("email")
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Empty Email field")
    .run(req);
  await check("cellphone")
    .trim()
    .notEmpty()
    .withMessage("Empty Cell Phone field")
    .isNumeric()
    .withMessage("Is not a Number")
    .run(req);
  await check("topic")
    .trim()
    .notEmpty()
    .withMessage("Empty Topic field")
    .run(req);
  await check("message")
    .trim()
    .notEmpty()
    .withMessage("Empty Message field")
    .run(req);

  let validation = validationResult(req);

  const response = validation.isEmpty()
    ? await createRegister(req.body)
    : validation;

  res.json(response);
};

const createRegister = async (content) => {
  const { name, email, topic, message } = content;
  await User.create(content);

  return { status: 200, msg: "registered successfully" };
};

module.exports = formRegisterContact;
