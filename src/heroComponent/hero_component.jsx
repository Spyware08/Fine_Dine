import React from 'react'
import About from './about section/about'
import Hero_component from './mainHeadcomponent/hero_component'
import Feature_product from './feature_product'
import Best_product from './best_product'
import Chef_highlight from './Chef_highlight'

export default function Hero_main() {
    return (
        <div>
           <Hero_component/>
           <About/>
           <Feature_product/>
           <Best_product/>
           <Chef_highlight/>
        </div>
    )
}
