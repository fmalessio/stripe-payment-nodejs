const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  console.log('Redirecting to product payment method...');
  res.render('payment');
});

router.get('/suscription', (req, res) => {
  console.log('Redirecting to product suscription method...');
  res.render('suscription');
});

module.exports = router;