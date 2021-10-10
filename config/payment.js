const config = require('./config');
const configureStripe = require('stripe');

const stripe = configureStripe(config.STRIPE_SECRET_KEY);
module.exports = stripe;