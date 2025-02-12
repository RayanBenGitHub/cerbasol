import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../App.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Produit 1', price: 2599.99 },
      { id: 2, name: 'Produit 2', price: 2599.99 },
      { id: 3, name: 'Produit 3', price: 2599.99 },
      { id: 4, name: 'Produit 4', price: 2599.99 },
      { id: 5, name: 'Produit 5', price: 2599.99 },
      { id: 6, name: 'Produit 6', price: 2599.99 },
      { id: 7, name: 'Produit 7', price: 2599.99 },
      { id: 8, name: 'Produit 8', price: 2599.99 },
      { id: 9, name: 'Produit 9', price: 2599.99 },
      { id: 10, name: 'Produit 10', price: 2599.99 },
      { id: 11, name: 'Produit 11', price: 2599.99 },
      { id: 12, name: 'Produit 12', price: 2599.99 },
    ];
    setProducts(fetchedProducts);
  }, []);

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return (
    <div className="product-page">
      <h1 className="page-title">{t('products')}</h1>
      <div className="product-carousel">
        {groupedProducts.map((group, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="product-row"
            style={{ whiteSpace: 'nowrap', display: 'flex' }}
            animate={{
              x: ['0%', '-100%'], 
            }}
            transition={{
              repeat: Infinity, 
              duration: 10,
              ease: 'linear',
            }}
            whileHover={{
              animationPlayState: 'paused', 
            }}
          >
            {[...group, ...group].map((product, idx) => (
              <motion.div
                key={`${rowIndex}-${idx}`}
                className="product-card"
                whileHover={{ scale: 1.1 }} 
              >
                <div className="product-image">
                  <img src={`https://via.placeholder.com/300?text=${product.name}`} alt={product.name} />
                </div>
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p>{product.price}€</p>
                  <motion.button
                    className="add-to-cart-button"
                    onClick={() => addToCart(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('add_to_cart')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;