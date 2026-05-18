const express = require("express");
const router = express.Router();

// POST /api/payments/charge
router.post("/charge", async (req, res) => {
  try {
    const { amount, currency, source, description } = req.body;

    if (!amount || !currency || !source) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // TODO: Stripe integration
    res.json({
      id: `ch_${Date.now()}`,
      amount,
      currency,
      status: "succeeded",
      created: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: "Payment processing failed" });
  }
});

// POST /api/payments/refund
router.post("/refund", async (req, res) => {
  try {
    const { charge_id, amount } = req.body;
    if (!charge_id) {
      return res.status(400).json({ error: "charge_id required" });
    }
    res.json({
      id: `re_${Date.now()}`,
      charge_id,
      amount,
      status: "succeeded"
    });
  } catch (err) {
    res.status(500).json({ error: "Refund failed" });
  }
});

module.exports = router;
