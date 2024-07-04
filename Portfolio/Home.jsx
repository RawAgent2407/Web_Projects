import React from "react"
import vg from "./chitra/one2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () =>{
    return(
        <>
            <div className="home" id="home">
                <main>
                    <h1>NerdGeek</h1>
                    <p>I am a programmer and don't know why I am???</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics"/>
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face everyday.
                        We are leading tech company whose aim is to increase the problem solving ability in kids.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta nulla, quidem quaerat
                        voluptatum id aut omnis nostrum deleniti recusandae expedita ut atque, odio tempora dignissimos
                        harum perspiciatis fugit rerum.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay: "0.3s"}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay: "0.5s"}}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay: "0.7s"}}>
                            <AiFillYoutube/>
                            <p>YouTube</p>
                        </div>
                        <div style={{animationDelay: "1s"}}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home