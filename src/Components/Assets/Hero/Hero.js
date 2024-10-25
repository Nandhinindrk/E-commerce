import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css';
import photo1 from '../photo1.avif';
import photo2 from '../photo2.avif';
import photo3 from '../photo3.avif';
import photo4 from '../photo4.avif';
import photo5 from '../photo5.avif';
import photo7 from '../photo7.avif';

const Hero = () => {
    // Use the imported images here
    const images = [photo1, photo4, photo3, photo5, photo2, photo7];

    return (
    
        <div className="slider-container">
            
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} className="slider-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        
    );
};

export default Hero;
