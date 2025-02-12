
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Produit 1', price: 2599.99 },
      { id: 2, name: 'Produit 2', price: 2599.99 },
      // Ajouter plus de produits ici...
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="product-list">
      <h1>Catalogue de Produits</h1>
      <div className="filters">
        {/* Ici tu peux ajouter des filtres par catégorie, prix, etc. */}
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`https://via.placeholder.com/300?text=${product.name}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}€</p>
            <Link to={`/product/${product.id}`} className="btn">Voir Détails</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;