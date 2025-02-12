import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../App.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

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
    <div>
      <header id="home" className="hero">
        <h1>{t('welcomeheader')}</h1>
        <p>{t('services')}</p>
        <motion.button
          className="cta-button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {t('discover_services')}
        </motion.button>
      </header>

      <div id="products" className="product-page">
        <h1 className="page-title">{t('products')}</h1>
        <div className="product-carousel">
          {groupedProducts.map((group, index) => (
            <div key={index} className="product-row">
              {group.map((product, idx) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="product-image">
                    <img
                      src={`https://via.placeholder.com/300?text=${product.name}`}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-info">
                    <h2>{product.name}</h2>
                    <p>{product.price}€</p>
                    <motion.button
                      className="add-to-cart-button"
                      onClick={() => addToCart(product)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {t('add_to_cart')}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;