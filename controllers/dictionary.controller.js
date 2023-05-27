const Dictionary = require("../models/Dictionary");

const dictionaryActions = async (req, res, next) => {
  const method = req.method;

  if (method === "GET") {
    return getDictionary(res);
  }

  if (method === "POST") {
    return createDictionary(req, res);
  }

  if (method === "DELETE") {
    return deleteDictionary(req, res);
  }

  return res.json({ method });
};

const createDictionary = async (req, res, next) => {
  const data = req.body;
  const registered = await Dictionary.create(data);
  res.json({ msg: "create dictionary", registered });
};

const updateDictionary = (req, res, next) => {
  res.json({ msg: "update dictionary" });
};

const deleteDictionary = async (req, res) => {
  const registerDeleted = await Dictionary.findByIdAndDelete(req.body.id);
  return res.json({ id: req.body.id, registerDeleted });
};

const getDictionary = async (res) => {
  const regiters = await Dictionary.find();
  res.json({ msg: "get dictionary", size: regiters.length, data: regiters });
};

module.exports = dictionaryActions;
