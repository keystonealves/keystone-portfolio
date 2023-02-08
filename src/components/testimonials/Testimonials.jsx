import React from "react";
import './testimonials.css';
import {Data} from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
    return (
        <section className="testimonial section container" id="testimonials">
            <h2 className="section__title">Depoimentos</h2>
            <span className="section__subtitle">Minhas avaliações</span>

            <Swiper
            className="testimonial__container" 
            // loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            >
                
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img" />

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;