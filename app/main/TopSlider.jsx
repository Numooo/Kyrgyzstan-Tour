import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSlider = () => {

    const NextArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="arrows next" onClick={onClick}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#091700"/>
                </svg>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="arrows prev" onClick={onClick}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#091700"/>
                </svg>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        delay: 7000,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: true,
                },
            },
        ],
    };


    return (
        <>
            <div id={"gallery"} className="slider-container px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-20 pb-14">
                <Slider {...settings}>
                    {[
                        '/assets/бир.jpg', '/assets/эки.jpg', '/assets/уч.jpg',
                        '/assets/Burana.jpg', '/assets/беш.jpg', '/assets/алты.jpg',
                        '/assets/жети.jpg', '/assets/сегиз.jpg', '/assets/тогуз.jpg',
                        '/assets/он.jpg', '/assets/онбир.jpg', '/assets/онэки.jpg',
                        '/assets/онуч.jpeg', '/assets/онторт.jpg',
                        '/assets/онбеш.jpg', '/assets/оналты.png', '/assets/онжети.jpg'
                    ].map((image, index) => (
                        <div key={index} className="relative mb-5 h-60 sm:h-72 md:h-80 lg:h-96">
                            <img
                                className="w-full h-full object-cover rounded-lg"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default TopSlider;
