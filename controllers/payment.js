const express = require("express");
const app = express();
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51JdAdCF4Yqr45yd9i965sqbZiaWiLtmwsWbtBYsk8JRWiCT99nQHZ6qQYawgOFIazchREfbGo4iVvOZt91dAyK4M00tz0gsAF0");
// app.use(express.static("public"));
// app.use(express.json());
const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
module.exports = {
  post: async (req, res, next) => {
    const { items } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      // Verify your integration in this guide by including this parameter
      metadata: {integration_check: 'accept_a_payment'},
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    });
  }
}
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//       price_data: {
//         product: '{{PRODUCT_ID}}',
//         unit_amount: 1500,
//         currency: 'bgn',
//       },
//       quantity: 1,
//     }],
//     payment_method_types: [
//       'card',
//       'acss_debit',
//     ],
//     mode: 'payment',
//     success_url: 'https://example.com/success',
//     cancel_url: 'https://example.com/cancel',
//   });
//   console.log(session);
//   return res.redirect(303, session.url);
//     //  return  res.send({
//     //     sessionId: session
//     // });
// }
// }
    // post: (req, res, next) => {
    //   const { items } = req.body;
    //   models.Order.create({email, name, phone, city, address, userId, items: cartProducts, totalAmount})
    //     .then((createdOrder) => {
    //       res.send(createdOrder);
    //       if (userId !== "") {
    //         models.User.updateOne(
    //           { _id: userId },
    //           { $push: { orders: createdOrder } }
    //         );
    //       }
    //     })
    //     .catch(next);
  
    // const { items } = req.body;
    // stripe.paymentIntents.create({
    //   amount: calculateOrderAmount(items),
    //   currency: "usd"
    // }).then((res)=>{
    //   res.send({
    //     clientSecret: paymentIntent.client_secret
    //   });
    // }).catch(next);
  


// const models = require("../models");
// const stripe = require("../config/payment");
// const YOUR_DOMAIN = 'http://localhost:3000';
// module.exports = {

// post(  async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // TODO: replace this with the `price` of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     payment_method_types: [
//       'card',
//       'alipay',
//       'acss_debit',
//       'giropay',
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   });
//   res.redirect(303, session.url)
//   get: (req, res, next) => {
//     models.Payment.find()
//       .then((payment) => {
//         return res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() });
//       })
//       .catch(next);
//   },
//  // stripe.charges.create(req.body, postStripeCharge(res));
// //  description,
// //       source: token.id,
// //       currency: CURRENCY,
// //       amount: fromEuroToCent(amount)
//   post: (req, res, next) => {
//     const { amount, source, currency, description} = req.body
//     console.log("amount "+ amount);
//     console.log("source "+ source);
//     console.log("currency "+ currency);
//     console.log("description "+ description);
//     models.Payment.create({amount, source, currency, description})
//       .then((res) => {
//         stripe.charges.create(res);
//       })
//       .catch(next);
//   }

