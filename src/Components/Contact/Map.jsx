import React from 'react'
import { useLocation } from 'react-router-dom';

const Map = () => {
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
        {/* <!-- Map Begin --> */}
    <div class="map">
        <iframe
            src="https://maps.app.goo.gl/xjLRasbs4nNsP49X8?g_st=com.google.maps.preview.copy"
            height="400" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div class="map-inside">
            <i class="icon_pin"></i>
            <div class="inside-widget">
                <h4>{isKhmer ? 'ភ្នំពេញ' : 'Phnom Penh'}</h4>
                <ul>
                    <li>Phone: +855-15-599-555</li>
                    <li>Add: st25. 44A Chomkadoung</li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- Map End --> */}
    </div>
  )
}

export default Map