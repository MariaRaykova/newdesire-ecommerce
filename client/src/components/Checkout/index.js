
// You nominate your own currency that you wanna charge. Here, we are going to charge USD.
// You multiply the number by 100 and convert it back to the closet integer. Stripe takes in by the cents. So, if you want to charge USD 4.99, you will have to charge 499 USD. That will automatically get recorded as USD 4.99.
// The bottom parts are the items that you want to get from your customers. You want your client to plug in zipcode, email, and allow them to remember you (so that they don’t have to type in credit card numbers when they do second purchase from you).
// on Stripe key above, make sure you plug in your publishable key starting with PK.

import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLISHABLE } from '../../config';
import { finishOrder } from '../../redux/action/cartActions';
import { createPayment } from '../../utils/paymentService';
import { useDispatch, useSelector } from "react-redux";
import "./index.scss"
const Checkout = ({ name,email,description, amount })  => {
const dispatch = useDispatch();
const CURRENCY = 'USD';

const fromDollarToCent = amount => parseInt(amount * 100);

const successPayment = data => {
  dispatch(finishOrder(true))
};

const errorPayment = data => {
  alert('Payment Error');
};


const onToken = (amount, description) => token =>
  createPayment({
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromDollarToCent(amount)
  })
    .then(successPayment)
    .catch(errorPayment);

    return(
  <StripeCheckout
    style={{ background: "#efd6d6", borederRadius: "0"}}
    name={name} //name="Three Comma Co." // the pop-in header title
    description={description} // description="Big Data Stuff" // the pop-in header subtitle
    amount={fromDollarToCent(amount)} // amount={1000000} // cents
    amountPrefix="Pay $"
    token={onToken(amount, description)} //token={this.onToken} // submit callback
    currency={CURRENCY} // currency="USD"
    stripeKey={STRIPE_PUBLISHABLE} //   stripeKey="..."
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lr_ggQZGE17_9isZAfRYNmzJ9b1HKxm-cw&usqp=CAU" // the pop-in header image (default none) "https://stripe.com/img/documentation/checkout/marketplace.png"
    ComponentClass="div"
    label="Buy Now" // text inside the Stripe button
    panelLabel="Pay Now" // prepended to the amount in the bottom pay button
    locale="en"
    // email={email}
    // // Note: Enabling either address option will give the user the ability to
    // // fill out both. Addresses are sent as a second parameter in the token callback.
    // shippingAddress
    // billingAddress={false}
    // // Note: enabling both zipCode checks and billing or shipping address will
    // // cause zipCheck to be pulled from billing address (set to shipping if none provided).
    // zipCode={false}
    // alipay // accept Alipay (default false)
    // bitcoin // accept Bitcoins (default false)
    // allowRememberMe // "Remember Me" option (default true)
    // //opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
    // //closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
    // // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
    // // you are using multiple stripe keys
    // reconfigureOnUpdate={false}
    // // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
    // // useful if you're using React-Tap-Event-Plugin
    // // triggerEvent="onTouchTap"
    errorText={errorPayment}
    successText={successPayment}
    cvc
  //  fields={[
  //   "name=*|John Doe",
  //   "email=*email|john@example.com",
  //   "phone=tel|+44 207 123 4567",
  //   "number=*|4242 4242 4242 4242|Long number on the front of your card|Card Number",
  //   "cvc=*|123|The 3 digits to the right of the signature strip located on the back of your card|CVC",
  //   "exp=*|10/17||Expiry Date",
  //   "address=*6|1 Chapel Hill, Heswall, BOURNEMOUTH, UK, BH1 1AA|The address where your order will be shipped",
  // ]}
  />)
}
export default Checkout;