import React from 'react'
import "../hero.css"

export default function About() {
    return (
        <div className='about_main'>
            <div className='d-flex justify-content-around p-5 align-items-center'>
                <div className='about_content'>
                    <h2>About us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ut efsdskdf sdflsdfj quisquam! Non.</p>
                </div>
                <div className='about_img'><img src="https://shorturl.at/nuBI6" alt="" />
                </div>
                <div className='about_content'>
                    <h2>Our History</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ut efsdskdf sdflsdfj quisquam! Non.</p>
                </div>
            </div> <hr />
        </div>
    )
}
