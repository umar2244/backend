const express = require('express');
const router = express.Router();
const { post } = require("../../controller/order");
router.post("/post", post);
module.exports = router;