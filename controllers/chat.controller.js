const Dictionary = require("../models/Dictionary");

const chatUser = async (req, res, next) => {
  const msg = req.body.msg;
  const flow = await readMessage(msg);
  res.json({ msg, flow });
};

function formatterMessage(text) {
  return text.trim().toLocaleLowerCase();
}

const readMessage = async (msg) => {
  const context = await Dictionary.find();

  return context; //formatterMessage(context);
};

const responseMessage = async () => {};

module.exports = chatUser;
