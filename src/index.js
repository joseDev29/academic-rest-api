const app = require("./app");

//DB connect
const db = require("./db/mongodb");
db();

//Server On
app.listen(app.get("port"), () => {
  console.log(`Server running in http://localhost:${app.get("port")}`);
});
