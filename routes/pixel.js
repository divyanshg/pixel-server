const express = require("express");
const router = express.Router();
const EmailLog = require("../models/EmailLog");

router.get("/pixel", async (req, res) => {
  const { email } = req.query;

  if (email) {
    const log = new EmailLog({ email });
    await log.save();
  }

  // Send a 1x1 transparent pixel
  const pixel = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
    "base64",
  );

  res.writeHead(200, {
    "Content-Type": "image/gif",
    "Content-Length": pixel.length,
  });
  res.end(pixel);
});

module.exports = router;
