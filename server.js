const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public"), { extensions: ['html'] }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is live on https://localhost:3000`);
})