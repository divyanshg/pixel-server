const mongoose = require("mongoose");

const emailLogSchema = new mongoose.Schema({
  email: { type: String, required: true },
  openedAt: { type: Date, default: Date.now },
});

const EmailLog = mongoose.model("EmailLog", emailLogSchema);

module.exports = EmailLog;
