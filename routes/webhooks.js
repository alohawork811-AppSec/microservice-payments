const express = require("express");
const router = express.Router();

// POST /webhooks/stripe
router.post("/stripe", (req, res) => {
  // TODO: Verify webhook signature
  // TODO: Process payment events
  console.log("Webhook received:", req.body?.type);
  res.json({ received: true });
});

module.exports = router;
