import React from 'react'
import { useLocation } from 'react-router-dom';
const ContactF = () => {

    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');

  return (
    <div>
        {/* <!-- Contact Form Begin --> */}
    <div class="contact-form spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__form__title">
                        <h2>{isKhmer ? 'ប្រអប់សារ' : 'Leave Message'}</h2>
                    </div>
                </div>
            </div>
            <form action="#">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <div class="col-lg-12 text-center">
                        <textarea placeholder="Your message"></textarea>
                        <button type="submit" class="site-btn">{isKhmer ? 'ផ្ញេីរសារ' : 'SEND MESSAGE'}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    {/* <!-- Contact Form End --> */}
    </div>
  )
}

export default ContactF