class Cart {
    cartItems;
    localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;

        
        
        this.loadFromStorage()
        
        this.cartQuantity(this)
        
    
   

    }

    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey))
        
        if (!this.cartItems) {
            this.cartItems = [{
              productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
              quantity: 2,
              deliveryOptionId: '1'
            }, {
              productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
              quantity: 1,
              deliveryOptionId: '2'
            }];
          }
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
      }

      addToCart(productId) {
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
      
        if (matchingItem) {
          matchingItem.quantity += 1;
        } else {
          this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
          });
        }
      
        this.saveToStorage();
      }

      removeFromCart(productId) {
        const newCart = [];
      
        this.cartItems.forEach((cartItem) => {
          if (cartItem.productId !== productId) {
            newCart.push(cartItem);
          }
        });
      
        this.cartItems = newCart;
      
        this.saveToStorage();
      }

      updateCartQuantityCheckout(){
        let cartItemQuantity = 0;
        this.cartItems.forEach((item)=>{
          cartItemQuantity += item.quantity
        })
      
        document.querySelector('.js-header-checkout-quantity').innerHTML = cartItemQuantity
        
      }

      updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
      
        matchingItem.deliveryOptionId = deliveryOptionId;
      
        this.saveToStorage();
      }

      cartQuantity(){
        let cartQuantity = 0
        this.cartItems.forEach((cartItem)=>{
          cartQuantity += cartItem.quantity
        })
        // console.log(cartQuantity)
      }

      updateQuantity(productId,newQuantity){ 
        const index = this.cartItems.findIndex(item => item.productId === productId)
        // console.log(cart[index])
        this.cartItems[index] = { ...this.cartItems[index], quantity: newQuantity };
        saveToStorage(this.cartItems)
         updateCartQuantityCheckout()
        // console.log(cart[index])
        document.querySelector(`.quantity-label-id-${productId}`).innerHTML = newQuantity
    
    }
}
  
  const cart = new Cart('cart-oop');

  const businessCart = new Cart('cart-business');
  
  console.log(cart)
  console.log(businessCart)