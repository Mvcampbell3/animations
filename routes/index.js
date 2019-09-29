const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
})

router.get("/sprite", (req,res) => {
  res.sendFile(path.join(__dirname, "sprite.html"))
})

router.get("/loading", (req,res) => {
  res.sendFile(path.join(__dirname, "loading.html"))
})

router.get("/scroll", (req, res) => {
  res.sendFile(path.join(__dirname, "scroll/html"))
})

module.exports = router;