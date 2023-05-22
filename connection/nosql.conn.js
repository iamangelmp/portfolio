const mongoose = require("mongoose");

// Configuración de opciones adicionales de Mongoose (opcional)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conectar a la base de datos de MongoDB
const connectionNoSql = async () => {
  mongoose
    .connect(process.env.MONGO_DB_NAME, options)
    .then((conn) => {
      console.log({
        service: "Mongo",
        status: "OK",
        msg: "Conexión exitosa a la base de datos",
      });
      return conn;
    })
    .catch((error) => {
      console.error("Error de conexión a la base de datos:", error);
    });
};

module.exports = connectionNoSql;
