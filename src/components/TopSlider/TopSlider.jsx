import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TopSlider.scss'
import {useState, useEffect} from 'react';
import img from '../../assets/image.png'
import axios from 'axios';
import pic1 from '../../assets/бир.jpg'
import pic2 from '../../assets/эки.jpg'
import pic3 from '../../assets/уч.jpg'
import pic4 from '../../assets/торт.jpg'
import pic5 from '../../assets/беш.jpg'
import pic6 from '../../assets/алты.jpg'
import pic7 from '../../assets/жети.jpg'
import pic8 from '../../assets/сегиз.jpg'
import pic9 from '../../assets/тогуз.jpg'
import pic10 from '../../assets/он.jpg'
import pic11 from '../../assets/онбир.jpg'
import pic12 from '../../assets/онэки.jpg'
import pic13 from '../../assets/онуч.jpeg'
import pic14 from '../../assets/онторт.jpg'
import pic15 from '../../assets/онбеш.jpg'
import pic16 from '../../assets/оналты.png'
import pic17 from '../../assets/онжети.jpg'
import burana from '../../assets/Burana.jpg'
import {forwardRef} from "React";

const TopSlider = forwardRef((props, ref) => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3ffc3134c35fc52da915381e91b8adb4`)
            .then(response => {
                setCars(response.data.results);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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
            <div ref={ref} className="slider-container px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-20 pb-20 sm:pb-16 lg:pb-20">
                <Slider {...settings}>
                    {[
                        pic1, pic2, pic3, burana, pic5, pic6, pic7, pic8, pic9, pic10,
                        pic11, pic12, pic13, pic14, pic15, pic16, pic17
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
});

export default TopSlider;
