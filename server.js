const express = require("express");
const app = express();

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const mongoose = require("mongoose");
const db = require("./config/keys").mongoURL;

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Mongo DB is connected"))
  .catch(err => console.log(`Error${err}`));

app.get("/", (req, res) => res.send("Hello"));

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is runing on port ${port}`));
