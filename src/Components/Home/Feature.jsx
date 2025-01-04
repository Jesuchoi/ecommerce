import React, { useEffect, useState } from 'react';
import MixItUp from 'mixitup';  // Import MixItUp library
import {useCart} from '../CartContext';
import { useLocation } from 'react-router-dom';

const Feature = () => {
  const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');

  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const { addToCart } = useCart();

  const categories = [
    { name: "All", api: "https://fakestoreapi.com/products/" },
    { name: "Electronics", api: "https://fakestoreapi.com/products/category/electronics" },
    { name: "Men's clothing", api: "https://fakestoreapi.com/products/category/men's clothing" },
    { name: "Women's clothing", api: "https://fakestoreapi.com/products/category/women's clothing" },
    { name: "jewelery", api: "https://fakestoreapi.com/products/category/jewelery" },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryPromises = categories.map(async (category) => {
          const response = await fetch(category.api);
          const data = await response.json();
          return {
            category: category.name,
            products: data.slice(0, 4),
          };
        });

        const results = await Promise.all(categoryPromises);
        setProducts(results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {/* Featured Section Begin */}
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>{isKhmer ? 'ផលិតផលពិសេស' : 'Featured Products'}</h2>
              </div>
              <div className="featured__controls">
                <ul className="active">
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      className={activeFilter === category.name ? 'active' : ''}
                      onClick={() => handleFilterClick(category.name)}>
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {products
              .filter((categoryData) => activeFilter === categoryData.category)
              .map((categoryData, index) =>
                categoryData.products.map((product) => (
                  <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mix">
                    <div className="featured__item">
                      <div
                        className="featured__item__pic set-bg"
                        style={{ backgroundImage: `url(${product.image})`, backgroundPosition: 'center', backgroundSize: 'contain' }}
                      >
                        <ul className="featured__item__pic__hover">
                          <li><a href="#"><i className="fa fa-heart"></i></a></li>
                          <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                          <li><a ><i className="fa fa-shopping-cart" onClick={() => handleAddToCart(product)}></i></a></li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6><a href="#">{product.title}</a></h6>
                        <h5>${product.price}</h5>
                      </div>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      </section>
      {/* Featured Section End */}
    </div>
  );
};

export default Feature;
