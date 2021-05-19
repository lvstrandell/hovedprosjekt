import React from 'react';
import firebaseInstance from '../config/firebase';
import { useCart } from '../config/shoppingcart';
import { useRouter } from 'next/router';
import { CartContainer, CartItems, CartRemoveBtn, CartTitle, CartTotal, CheckoutButton } from '../components/ShoppingCart/shoppingcart';

const ShoppingCart = () => {
  const cart = useCart();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderCollection = firebaseInstance.firestore().collection('orders');
    orderCollection.doc().set({
      order: [...cart.productLines],
    })
    .then(() => {
      console.log('New order!')
    })
    .catch(error => {
      console.log(error)
    })
  };

  const handleRemove = (event) => {
    cart.productLines.splice(event.target.value, 1)
    console.log(cart.productLines)
    router.push('/cart')
  }

  return(
    <main>
      <CartTitle>Your Cart</CartTitle>
      <section>
        <CartContainer>
          <ul>
            {cart.productLines.map((items) => {
              return(
                <CartItems key={items.slug}>
                  <li>
                    <p>{items.item}</p>
                    <p>{items.price}.00 NOK</p>
                  </li>
                  <CartRemoveBtn onClick={(event) => handleRemove(event)}>X</CartRemoveBtn>
                </CartItems>
              )
            })}
          </ul>
          <CartTotal>Total: {cart.total}.00 NOK</CartTotal>
          <CheckoutButton onClick={handleSubmit}>CHECKOUT</CheckoutButton>
        </CartContainer>
      </section>
    </main>
  )
}

export default ShoppingCart;