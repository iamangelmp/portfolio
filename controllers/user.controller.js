const { check, validationResult } = require("express-validator");

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
  const { name, email, cellphone, topic, message, asociate_data } = content;

  return { msg: "registrado" };
};

module.exports = formRegisterContact;
