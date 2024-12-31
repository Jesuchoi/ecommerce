import React, {useEffect} from 'react'
import banner1 from '../img/banner/banner-1.jpg'
import banner2 from '../img/banner/banner-2.jpg'
const Banner = () => {
    useEffect(() => {
        document.querySelectorAll('.set-bg').forEach((element) => {
            const bg = element.getAttribute('data-setbg');
            element.style.backgroundImage = `url(${bg})`;
        });
    }, []);
  return (
    <div>
        {/* <!-- Banner Begin --> */}
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src={banner1} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                        <img src={banner2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Banner End --> */}
    </div>
  )
}

export default Banner