import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = { id, name: `Produit ${id}`, price: 2599.99, description: 'Description du produit' };
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={`https://via.placeholder.com/300?text=${product.name}`} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}€</p>
      <button>Ajouter au panier</button>
    </div>
  );
};

export default ProductDetail;