require('dotenv').config();

const MY_DOMAIN = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`;

module.exports = {
  domain: MY_DOMAIN,
  protocol: process.env.PROTOCOL,
  host: process.env.HOST,
  port: process.env.PORT,
  stripeSecret: process.env.STRIPE_SECRET
};