import React from "react";
import "./Homepage.css";
import imgTest from "../../Assets/images/desktop-image-hero-1.jpg";
import imgTestMobile from "../../Assets/images/mobile-image-hero-1.jpg";
import imgAboutDark from "../../Assets/images/image-about-dark.jpg";
import imgAboutLight from "../../Assets/images/image-about-light.jpg";

export default function Homepage() {
    return (
        <main className="container">
            <section className="home">
                <div className="slider">
                    <img
                        src={imgTest}
                        alt=""
                        srcSet={`${imgTestMobile} 375w, ${imgTest} 600w`}
                        sizes="(max-width: 375px) 375w, 600w"
                    />
                    <div className="slider-controls">
                        <div className="slider-btn left">
                            <svg
                                width="14"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 0L1 12l12 12"
                                    stroke="#FFF"
                                    fill="none"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="slider-btn right">
                            <svg
                                width="14"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 0l12 12L1 24"
                                    stroke="#FFF"
                                    fill="none"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <header>
                    <h1 className="header-title">
                        Discover innovative ways to decorate
                    </h1>
                    <p className="header-txt">
                        We provide unmatched quality, comfort, and style for
                        property owners across the country. Our experts combine
                        form and function in bringing your vision to life.
                        Create a room in your own style with our collection and
                        make your property a reflection of you and what you
                        love.
                    </p>
                    <div className="cta">
                        <a href="#" className="cta-link">
                            Shop now
                        </a>
                        <svg
                            width="40"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                                fill="#000"
                                fillRule="nonzero"
                            />
                        </svg>
                    </div>
                </header>
            </section>

            <section className="about">
                <img className="img-dark" src={imgAboutDark} alt="" srcset="" />
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
                    srcset=""
                />
            </section>
        </main>
    );
}
