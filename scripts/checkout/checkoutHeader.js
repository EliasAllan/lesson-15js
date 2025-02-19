
import { renderOrderSummary } from "./orderSummary.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { cart } from "../../data/cart.js";
// console.log(cart)
export default function renderCheckoutHeader(cart){
    // console.log(cart)
    let totalCartQuantity = 0;
    cart.forEach((cartItem) => {
        totalCartQuantity += cartItem.quantity
      });
      // console.log(totalCartQuantity)
    document.querySelector('.return-to-home-link')
    .innerHTML =`${totalCartQuantity} items`
        renderOrderSummary()
    
       


    
    }
    renderCheckoutHeader(cart)