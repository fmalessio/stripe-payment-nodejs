const { Router } = require('express');
const router = Router();
const { domain, stripeSecret } = require('../config');

// Stripe
const stripe = require('stripe')(stripeSecret);

router.get('/', (req, res) => {
    console.log('Redirecting to product...');
    res.render('product');
});

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1LUKBLDbM43bJ0ypsB45ZW2L', // Price ID
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${domain}/result/success`,
    cancel_url: `${domain}/result/cancel`,
  });

  res.redirect(303, session.url);
});

router.get('/result/success', (req, res) => {
    res.render('./result/success');
});
router.get('/result/cancel', (req, res) => {
    res.render('./result/cancel');
});

module.exports = router;