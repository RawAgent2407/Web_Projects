import React from "react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "./chitra/one3.jpg"
import img2 from "./chitra/one4.jpg"

const Services = () =>{
    return(
        <div>
            <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} interval={3000} >
                <div>
                    <img src={img1} alt="web development"/>
                    <p className="legend">Full Stack</p>
                </div>
                <div>
                    <img src={img2} alt="web development"/>
                    <p className="legend">Peer to Peer support</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services