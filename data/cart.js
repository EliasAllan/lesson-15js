export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

export function updateCartQuantityCheckout(){
    let cartItemQuantity = 0;
    cart.forEach((item)=>{
      cartItemQuantity += item.quantity
    })
  
    document.querySelector('.js-header-checkout-quantity').innerHTML = cartItemQuantity
    
  }
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

// console.log(cart)

function cartQuantity(cart){
  let cartQuantity = 0
  cart.forEach((cartItem)=>{
    cartQuantity += cartItem.quantity
  })
  // console.log(cartQuantity)
}

export function updateQuantity(productId,newQuantity){ 
    const index = cart.findIndex(item => item.productId === productId)
    // console.log(cart[index])
    cart[index] = { ...cart[index], quantity: newQuantity };
    saveToStorage(cart)
     updateCartQuantityCheckout()
    // console.log(cart[index])
    document.querySelector(`.quantity-label-id-${productId}`).innerHTML = newQuantity

}

cartQuantity(cart)