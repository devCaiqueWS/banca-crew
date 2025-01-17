import React, { useState } from 'react';
import './style/Cart.css';
import { Helmet } from 'react-helmet';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Camiseta Street', price: 'R$ 89,99' },
    { id: 2, name: 'Tênis Urbano', price: 'R$ 199,99' }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Helmet>
        <title>BANCA | Carrinho</title>
      </Helmet>
      <div className="cart">
        <h2>Carrinho de Compras</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button 
                onClick={() => removeItem(item.id)}
                className="remove-button"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
        <button>Finalizar Compra</button>
      </div>
    </>
  );
};

export default Cart;
