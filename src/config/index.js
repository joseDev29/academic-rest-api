require("dotenv").config();

module.exports = {
  server_port: process.env.SERVER_PORT,
  db_connections: {
    mongodb: {
      host: process.env.MONGO_HOST,
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      dbname: process.env.MONGO_DB_NAME || "practice-db",
    },
  },
  secretkeys: {
    cryptojs: process.env.CRYPTO_JS_SECRET_KEY,
    jwt: process.env.JWT_SECRET_KEY,
  },
  roles: {
    student: 1,
    teacher: 2,
  },
  sessionTime: 3600,
};
