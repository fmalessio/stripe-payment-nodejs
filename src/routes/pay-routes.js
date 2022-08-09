const { Router } = require('express');
const payRouter = Router();
const { domain, stripeSecret } = require('../config');

// Stripe
const stripe = require('stripe')(stripeSecret);

payRouter.post('/create-checkout-session', async (req, res) => {

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: req.body.priceID, // Price ID
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${domain}/result/success`,
        cancel_url: `${domain}/result/cancel`,
    });

    console.log(`Payment id: ${session.id}`);
    console.log(`Session Obj: ${JSON.stringify(session)}`);

    res.redirect(303, session.url);
});

payRouter.get('/result/success', (req, res) => {
    res.render('./result/success');
});
payRouter.get('/result/cancel', (req, res) => {
    res.render('./result/cancel');
});

module.exports = payRouter;