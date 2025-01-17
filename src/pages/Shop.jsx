import React, { useState } from 'react';
import './style/Shop.css';
import { Helmet } from 'react-helmet';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'camisetas', name: 'Camisetas' },
    { id: 'calcas', name: 'Calças' },
    { id: 'tenis', name: 'Tênis' },
    { id: 'acessorios', name: 'Acessórios' },
    { id: 'jaquetas', name: 'Jaquetas' }
  ];

  const products = [
    { id: 1, name: 'Camiseta Street Basic', price: 'R$ 89,99', category: 'camisetas' },
    { id: 2, name: 'Camiseta Oversized', price: 'R$ 99,99', category: 'camisetas' },
    { id: 3, name: 'Camiseta Tie Dye', price: 'R$ 109,99', category: 'camisetas' },
    { id: 4, name: 'Calça Cargo Preta', price: 'R$ 199,99', category: 'calcas' },
    { id: 5, name: 'Calça Wide Leg', price: 'R$ 189,99', category: 'calcas' },
    { id: 6, name: 'Tênis Urbano High', price: 'R$ 299,99', category: 'tenis' },
    { id: 7, name: 'Tênis Skate Pro', price: 'R$ 259,99', category: 'tenis' },
    { id: 8, name: 'Boné Aba Reta', price: 'R$ 79,99', category: 'acessorios' },
    { id: 9, name: 'Corrente Prata', price: 'R$ 89,99', category: 'acessorios' },
    { id: 10, name: 'Jaqueta Corta Vento', price: 'R$ 299,99', category: 'jaquetas' },
    { id: 11, name: 'Jaqueta Jeans', price: 'R$ 259,99', category: 'jaquetas' },
    { id: 12, name: 'Jaqueta Bomber', price: 'R$ 329,99', category: 'jaquetas' }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>BANCA | Coleção</title>
      </Helmet>
      <div className="shop-container">
        <aside className="sidebar">
          <h3>Categorias</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li 
                key={category.id}
                className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </aside>

        <main className="shop-content">
          <h2>Loja</h2>
          <div className="shop-items">
            {filteredProducts.map((product) => (
              <div className="shop-item" key={product.id}>
                <div className="product-image">
                  <img src={`/images/products/${product.category}/${product.id}.jpg`} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button className="add-to-cart">Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Shop;
