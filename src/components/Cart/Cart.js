import { useState } from 'react';
import Card from '../Card/Card.js'
function Cart(props) {
    const [produit,setProduit] = useState ([
        {   
            id:1,
            price:15,
            name:"PC",
            quantity:1
        },
        {
            id:2,
            price:10000,
            name:"PC1",
            quantity:1
        },
        {
            id:3,
            price:50,
            name:"PC2",
            quantity:1
        },
        {
            id:4,
            price:5,
            name:"PC3",
            quantity:1
        },
        {
            id:5,
            price:150,
            name:"PC4",
            quantity:1
        }
    ],[])
   function updateQuantity(id, quantity) {
    const newCart = produit.map(
      item => item.id === id
        ? { ...item, quantity: quantity }
        : item
    );
    setProduit(newCart);
  }

  const total = produit.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );
    return(
        <div>
        {produit.map(item => <Card
        product={item}
        key={item.id}
        updateQuantity={updateQuantity}
      />)}
      <div>total = {total}€</div>
    </div>
    );
}
export default Cart;