"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopSlider = () => {
    const images = [
        "/assets/бир.jpg", "/assets/эки.jpg", "/assets/уч.jpg",
        "/assets/Burana.jpg", "/assets/беш.jpg", "/assets/алты.jpg",
        "/assets/жети.jpg", "/assets/сегиз.jpg", "/assets/тогуз.jpg",
        "/assets/он.jpg", "/assets/онбир.jpg", "/assets/онэки.jpg",
        "/assets/онуч.jpeg", "/assets/онторт.jpg",
        "/assets/онбеш.jpg", "/assets/оналты.png", "/assets/онжети.jpg",
    ];

    return (
        <div
            id="gallery"
            className="slider-container px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-20 pb-14 overflow-hidden"
        >
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    1024: {
                        centeredSlides: true,
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative mb-8 h-60 sm:h-72 md:h-80 lg:h-96">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopSlider;
