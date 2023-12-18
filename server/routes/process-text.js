const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { text } = req.body;
  const wordsArray = text
    .split(/\s+/)
    .map((word) => ({ text: word, checked: false }));
  res.json(wordsArray);
});

module.exports = router;
