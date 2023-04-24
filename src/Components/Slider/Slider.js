import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import desktopHero1 from "../../Assets/images/desktop-image-hero-1.jpg";
import desktopHero2 from "../../Assets/images/desktop-image-hero-2.jpg";
import desktopHero3 from "../../Assets/images/desktop-image-hero-3.jpg";
import mobileHero1 from "../../Assets/images/mobile-image-hero-1.jpg";
import mobileHero2 from "../../Assets/images/mobile-image-hero-2.jpg";
import mobileHero3 from "../../Assets/images/mobile-image-hero-3.jpg";

export default function Slider() {
    const [sliderData, setSliderData] = useState([
        {
            index: 0,
            desktop: desktopHero1,
            mobile: mobileHero1,
            alt: "Table et chaises design blanches et bois. Un bonsaï est disposé au milieu de la table.",
            title: "Chaise design blanche et bois",
            headerTitle: "Discover innovative ways to decorate",
            headerTxt:
                "We provide unmatched quality, comfort, and style for property owners across the country. \r\n Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        },
        {
            index: 1,
            desktop: desktopHero2,
            mobile: mobileHero2,
            alt: "Chaises verte, jaune et rose pale.",
            title: "Déclinaison de couleurs",
            headerTitle: "We are available all across the globe",
            headerTxt:
                "With stores all over the world, it's easy for you to find furniture for your home or place of business. \r\n Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        },
        {
            index: 2,
            desktop: desktopHero3,
            mobile: mobileHero3,
            alt: "Chaise noire en métal avec assise en cuir.",
            title: "Chaise design noire",
            headerTitle: "Manufactured with the best materials",
            headerTxt:
                "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        },
    ]);

    // Slide visible
    const [currentSlide, setCurrentSlide] = useState(0);
    // Slide précédente
    const [previousSlide, setPreviousSlide] = useState(0);
    // "Bridage" de 600ms entre chaque défilement de nouvelle slide
    const [animationLock, setAnimationLock] = useState(false);
    // Référence à la slide visible
    const slideRef = useRef();

    // Écoute du clavier /défilement des slides
    useEffect(() => {
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [currentSlide, previousSlide, animationLock]);

    const handleKeyUp = (e) => {
        if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
        } else {
            return;
        }
    };

    // Défilement vers la gauche
    const prevSlide = () => {
        if (animationLock === false) {
            setAnimationLock(true);
            setPreviousSlide(currentSlide);
            if (currentSlide - 1 < 0) {
                setCurrentSlide(2);
            } else {
                setCurrentSlide(currentSlide - 1);
            }
            slideRef.current.classList.add("active-left");
            animSliderTxt();
            setTimeout(() => {
                slideRef.current.classList.remove("active-left");
                setAnimationLock(false);
            }, 600);
        } else {
            return;
        }
    };

    // Défilement vers la droite
    const nextSlide = () => {
        if (animationLock === false) {
            setAnimationLock(true);
            setPreviousSlide(currentSlide);
            if (currentSlide + 1 > 2) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }

            slideRef.current.classList.add("active-right");
            animSliderTxt("reverse");
            setTimeout(() => {
                slideRef.current.classList.remove("active-right");
                setAnimationLock(false);
            }, 600);
        } else {
            return;
        }
    };

    // Animation du contenu texte du Slider
    const slideTxtRef = useRef([]);

    const addToSlideTxtRef = (el) => {
        if (el && !slideTxtRef.current.includes(el)) {
            slideTxtRef.current.push(el);
        }
    };

    function animSliderTxt(direction) {
        slideTxtRef.current.forEach((element) => {
            direction && direction === "reverse"
                ? element.classList.add("active-reverse")
                : element.classList.add("active");
            setTimeout(() => {
                direction && direction === "reverse"
                    ? element.classList.remove("active-reverse")
                    : element.classList.remove("active");
            }, 600);
        });
    }

    return (
        <>
            <div className="slider">
                <img
                    className="previous-slide"
                    src={sliderData[previousSlide].desktop}
                    alt={sliderData[previousSlide].alt}
                    title={sliderData[previousSlide].title}
                    srcSet={`${sliderData[previousSlide].mobile} 375w, ${sliderData[previousSlide].desktop} 1360w`}
                    sizes="100vw"
                />
                <img
                    ref={slideRef}
                    src={sliderData[currentSlide].desktop}
                    alt={sliderData[currentSlide].alt}
                    title={sliderData[currentSlide].title}
                    srcSet={`${sliderData[currentSlide].mobile} 375w, ${sliderData[currentSlide].desktop} 1360w`}
                    sizes="100vw"
                />
            </div>
            <header>
                <h1 ref={addToSlideTxtRef} className="header-title">
                    {sliderData[currentSlide].headerTitle}
                </h1>
                <p ref={addToSlideTxtRef} className="header-txt">
                    {sliderData[currentSlide].headerTxt}
                </p>
                <div ref={addToSlideTxtRef} className="cta">
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
                <div className="slider-controls">
                    <div onClick={prevSlide} className="slider-btn left">
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
                    <div onClick={nextSlide} className="slider-btn right">
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
            </header>
        </>
    );
}
