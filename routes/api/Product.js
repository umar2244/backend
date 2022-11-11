const express = require("express");
const router = express.Router();
const { add, get } = require("../../controller/Product");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now() + file.originalname.split(" ").join("-")}`);
  },
});
const upload = multer({ storage: storage });

router.post("/add", upload.single("ProductImage"), add);

router.get("/", get);

module.exports = router;
