const data = require("../connection/data");

const chatUser = async (req, res, next) => {
  const msg = req.body.msg;
  const flow = await readMessage(msg);
  res.json({ msg, flow });
};

function formatterMessage(text) {
  return text.trim().toLocaleLowerCase();
}

const readMessage = async (msg) => {
  return formatterMessage(msg);
};

const responseMessage = async () => {};

module.exports = chatUser;
