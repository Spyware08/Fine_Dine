import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer_head p-2'>

           <div className='footer_main'>Have any Query ? <NavLink className="contact_navlink" to="/contact">Contact us</NavLink> </div>
            <div className=' footer  d-flex justify-content-around'>
                <div className='footer_contact'>
                    <h4>Contact us</h4> <br /> <br />
                    <p>abc, 123 park , New York</p>
                    <hr />
                    <p>+08367283283</p>
                    <p>+00011023328</p>
                </div>
                <div className='footer_mid'>
                    <h3>Fine-Dine</h3>
                    <p>"Savor culinary excellence at our restaurant, where each dish is a work of art. From the first bite to the last, embark on a flavor-filled journey curated with passion and precision. Our commitment is to deliver not just meals but unforgettable moments, making dining with us a truly extraordinary experience."</p>
                </div>
                <div className='footer_time'>
                    <h4>Working Hour</h4><br /> <br />
                    <div>
                        <p>Mon-Fri</p>
                        <p>9am-10pm</p>
                    </div>
                    <hr />
                    <div>
                        <p>Sat-Sun</p>
                        <p>8am-12pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
