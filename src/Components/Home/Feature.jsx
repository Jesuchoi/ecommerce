// import React, { useEffect } from 'react';
// import MixItUp from 'mixitup';  // Import MixItUp library
// import feature1 from '../img/featured/feature-1.jpg';
// import feature2 from '../img/featured/feature-2.jpg';

// const Feature = () => {
//   useEffect(() => {

//     const mixer = MixItUp('.featured__filter', {
//       selectors: {
//         target: '.col-lg-3', 
//       },
//       animation: {
//         duration: 300, 
//       },
//     });

//     // Set background images
//     document.querySelectorAll('.set-bg').forEach((element) => {
//       const bg = element.getAttribute('data-setbg');
//       element.style.backgroundImage = `url(${bg})`;
//     });

//     // Cleanup the MixItUp instance on component unmount
//     return () => {
//       mixer.destroy();
//     };
//   }, []);

//   return (
//     <div>
//         {/* <!-- Featured Section Begin --> */}
//     <section class="featured spad">
//         <div class="container">
//             <div class="row">
//                 <div class="col-lg-12">
//                     <div class="section-title">
//                         <h2>Featured Product</h2>
//                     </div>
//                     <div class="featured__controls">
//                         <ul>
//                             <li class="active" data-filter="*">All</li>
//                             <li data-filter=".oranges">Oranges</li>
//                             <li data-filter=".fresh-meat">Fresh Meat</li>
//                             <li data-filter=".vegetables">Vegetables</li>
//                             <li data-filter=".fastfood">Fastfood</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div class="row featured__filter">
//                 <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
//                     <div class="featured__item">
//                         <div class="featured__item__pic set-bg" data-setbg={feature1}>
//                             <ul class="featured__item__pic__hover">
//                                 <li><a href="#"><i class="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div class="featured__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
//                     <div class="featured__item">
//                         <div class="featured__item__pic set-bg" data-setbg={feature2}>
//                             <ul class="featured__item__pic__hover">
//                                 <li><a href="#"><i class="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div class="featured__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     {/* <!-- Featured Section End --> */}
//     </div>
//   )
// }

// export default Feature


import React, { useEffect, useState } from 'react';
import MixItUp from 'mixitup';  // Import MixItUp library

const Feature = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    const mixer = MixItUp('.featured__filter', {
      selectors: {
        target: '.col-lg-3', 
      },
      animation: {
        duration: 300, 
      },
    });

    // Cleanup the MixItUp instance on component unmount
    return () => {
      mixer.destroy();
    };
  }, []);

  return (
    <div>
      {/* Featured Section Begin */}
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Products</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">All</li>
                  <li data-filter=".oranges">Men's clothing</li>
                  <li data-filter=".fresh-meat">Women's clothing</li>
                  <li data-filter=".vegetables">Electronices</li>
                  <li data-filter=".fastfood">Jewelery</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {/* Map through the products and display each */}
            {products.map((product) => (
              <div
                key={product.id}
                className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{ backgroundImage: `url(${product.image})` , backgroundPosition: 'center', backgroundSize: 'contain'}}
                  >
                    <ul className="featured__item__pic__hover">
                      <li><a href="#"><i className="fa fa-heart"></i></a></li>
                      <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                      <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="#">{product.title}</a></h6>
                    <h5>${product.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Section End */}
    </div>
  );
};

export default Feature;
