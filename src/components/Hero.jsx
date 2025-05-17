import './Hero.css';
import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/b.jpg';
import { useState, useEffect, useRef } from 'react';

function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const trackRef = useRef(null);
    const heroImages = [heroImage1, heroImage2, heroImage3];
    const displayImages = [...heroImages, heroImages[0]];

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = () => {
        if (currentImageIndex === displayImages.length - 1) {
            if (trackRef.current) {
                trackRef.current.style.transition = 'none';
                setCurrentImageIndex(0);

                trackRef.current.getBoundingClientRect();
            }
        }

        setIsTransitioning(false);

        setTimeout(() => {
            if (trackRef.current) {
                trackRef.current.style.transition = 'transform 0.8s ease-in-out';
            }
        }, 50);
    };

    const goToNextSlide = () => {
        if (isTransitioning || !trackRef.current) return;
        setIsTransitioning(true);
        setCurrentImageIndex(prevIndex => prevIndex + 1);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentImageIndex || !trackRef.current) return;
        setIsTransitioning(true);
        setCurrentImageIndex(index);
    };

    return (
        <div className='hero' id='hero'>
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                    ref={trackRef}
                >
                    {displayImages.map((image, index) => (
                        <div className="carousel-slide" key={index}>
                            <img
                                className="hero-image"
                                src={image}
                                alt={`Hero Image ${(index % heroImages.length) + 1}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="carousel-indicators">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-indicator ${currentImageIndex % heroImages.length === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="hero-content">
                <h2>Welcome to Stream City</h2>
                <p>Experience a new way to stream.</p>
            </div>
        </div>
    );
}

export default Hero;