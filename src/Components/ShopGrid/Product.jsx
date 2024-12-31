

import React, { useState, useEffect } from 'react'

const Product = () => {
  // State to hold fetched products
  const [products, setProducts] = useState([])

  // Fetch products from the API on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <div>
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Price</h4>
                  <div className="price-range-wrap">
                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10" data-max="540">
                      <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                      <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                    </div>
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
              </div>
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6><span>{products.length}</span> Products found</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Map over the products and display them */}
                {products.map((product) => (
                  <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product.image})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
                        <ul className="product__item__pic__hover">
                          <li><a href="#"><i className="fa fa-heart"></i></a></li>
                          <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                          <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6><a href="#">{product.title}</a></h6>
                        <h5>${product.price}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#"><i className="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </div>
  )
}

export default Product
