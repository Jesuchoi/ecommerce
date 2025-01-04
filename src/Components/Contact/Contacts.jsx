import React from 'react'
import { useLocation } from 'react-router-dom';


const Contacts = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
        {/* <!-- Contact Section Begin --> */}
    <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_phone"></span>
                        <h4>{isKhmer ? 'ទូរស័ព្ទលេខ' : 'Phone'}</h4>
                        <p>+855-15-599-555</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_pin_alt"></span>
                        <h4>{isKhmer ? 'អាស័យដ្ឋាន' : 'Address'}</h4>
                        <p>{isKhmer ? 'បុរីចំការដូង' : 'Chamkadoung,'}<br/>{isKhmer ? 'ភ្នំពេញ' : 'Phnom Penh'}</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_clock_alt"></span>
                        <h4>{isKhmer ? 'បើកចាប់ពី' : 'Open time'}</h4>
                        <p>{isKhmer ? '10:00​ព្រឹក to 23:00 ល្ងាច' : '10:00 am to 23:00 pm'}</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_mail_alt"></span>
                        <h4>{isKhmer ? 'អុីម៊ែល' : 'Email'}</h4>
                        <p>jesuchoi920@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Section End --> */}
    </div>
  )
}

export default Contacts