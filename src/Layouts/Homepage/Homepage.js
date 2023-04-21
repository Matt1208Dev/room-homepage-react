import React from "react";
import "./Homepage.css";
import imgAboutDark from "../../Assets/images/image-about-dark.jpg";
import imgAboutLight from "../../Assets/images/image-about-light.jpg";
import Slider from "../../Components/Slider/Slider";

export default function Homepage() {
    return (
        <main className="container">
            <section className="home">
                <Slider />
            </section>

            <section className="about">
                <img className="img-dark" src={imgAboutDark} alt="" />
                <div className="about-txt">
                    <h2>About our furniture</h2>
                    <p>
                        Our multifunctional collection blends design and
                        function to suit your individual taste. Make each room
                        unique, or pick a cohesive theme that best express your
                        interests and what inspires you. Find the furniture
                        pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are
                        available to help you create your dream space.
                    </p>
                </div>
                <img
                    className="img-light"
                    src={imgAboutLight}
                    alt=""
                />
            </section>
        </main>
    );
}
