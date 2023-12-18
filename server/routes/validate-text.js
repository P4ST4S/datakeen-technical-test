const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const words = req.body.text;
  const selectedWords = words
    .map((word, index) =>
      word.checked ? `${word.text} (position ${index + 1})` : null
    )
    .filter(Boolean);

  const message = selectedWords.length
    ? `Important words: ${selectedWords.join(", ")}`
    : `No words selected as important`;

  res.json({ message });
});

module.exports = router;
