import React, {useEffect} from 'react'
import BreadCrumb from '../img/breadcrumb.jpg'

const Breadcrumb = () => {

    useEffect(() => {
        document.querySelectorAll(".set-bg").forEach((element) => {
          const bg = element.getAttribute("data-setbg");
          element.style.backgroundImage = `url(${bg})`; // Corrected string interpolation
        });
      }, []);

  return (
    <div>
        {/* <!-- Breadcrumb Section Begin --> */}
    <section class="breadcrumb-section set-bg" data-setbg={BreadCrumb}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Organi Shop</h2>
                        <div class="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}
    </div>
  )
}

export default Breadcrumb