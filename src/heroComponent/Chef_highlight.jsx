import React from 'react'
import "./hero.css"

export default function Chef_highlight() {
    return (
        <div className='chef_head'> <hr />
            <h2>Our Chefs</h2> <br /> <br /> 
            <div className='chef_main'>
                <div>
                    <h3>Adam Stark</h3>
                    <h6><i>Senior Chef</i></h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam labore vel alias! Ex similique ipsam aspernatur fuga fugit veritatis facere! Alias delectus dolorem illum dolore repellendus repudiandae illo officia?</p>

                </div>
                <img src="https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_1280.jpg" alt="" />
            </div>
            <div className='chef_main'>
                <img src="https://images.pexels.com/photos/7525002/pexels-photo-7525002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div>
                    <h3>Sabrina Morningstar</h3>
                    <h6><i>Chef Head</i></h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam labore vel alias! Ex similique ipsam aspernatur fuga fugit veritatis facere! Alias delectus dolorem illum dolore repellendus repudiandae illo officia?</p>

                </div>
            </div>


        </div>
    )
}
