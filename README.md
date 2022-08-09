# stripe-payment-nodejs
Stripe POC with NojdeJS

# Configure project

1)
Create a .env file in the project root (same level than package.json), and add the environment variabled. To see all variables take a look at the file **src/config.js**.
Example for local:
```
PROTOCOL=http
HOST=localhost
PORT=3000
STRIPE_SECRET=generate_a_secret
STRIPE_DASHBOARD_SECRET=generate_a_secret
```
2) Go to **src/views/payment.hbs** and configure the Price ID inside the form. The value is generated by Stripe.

3) Go to **src/views/suscription.hbs** and configure the Product ID and Customer ID inside the form. The value is generated by Stripe.

# Start project

If your first time run:
```
npm install
```

To start run:
```
node src/index.js
```

# Payment Test

Here you have cards for testing:
https://stripe.com/docs/testing?numbers-or-method-or-token=card-numbers#international-cards

# Links

- https://stripe.com/docs/payments
- https://handlebarsjs.com/guide