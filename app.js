const connectDb = require("./db/config");
const express = require("express");
const app = express();
const tasks = require("./routes/task");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const port = process.env.PORT;
const databaseUrl = process.env.database_url;
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);
const start = async () => {
  try {
    await connectDb(databaseUrl);
    app.listen(port, () => console.log(`server running on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
