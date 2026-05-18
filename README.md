# microservice-payments

Payment processing microservice with Stripe integration.

## Features
- Process payments via Stripe API
- Webhook handling for payment events
- Idempotent transaction processing
- Audit logging for PCI compliance

## Setup
```bash
cp .env.example .env
# Fill in your Stripe keys and DB credentials
npm install
npm start
```

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | /api/payments/charge | Process a payment |
| POST | /api/payments/refund | Refund a payment |
| POST | /webhooks/stripe | Stripe webhook receiver |
| GET | /health | Health check |

## Environment Variables
See `.env.example` for required configuration.
