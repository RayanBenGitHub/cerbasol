import React from 'react';
import { useCart } from './context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product, index) => (
            <motion.div
              key={product.id}
              className="cart-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={`https://via.placeholder.com/100?text=${product.name}`}
                alt={product.name}
              />
              <div className="cart-item-info">
                <h2>{product.name}</h2>
                <p>{product.price}€</p>
                <motion.button
                  className="remove-button"
                  onClick={() => removeFromCart(product)}
                  whileHover={{ scale: 1.1 }}
                >
                  Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <p>Total: {totalPrice}€</p>
        <motion.button
          className="clear-cart-button"
          onClick={clearCart}
          whileHover={{ scale: 1.05 }}
        >
          Clear Cart
        </motion.button>
        <Link to="/checkout" className="checkout-button">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
