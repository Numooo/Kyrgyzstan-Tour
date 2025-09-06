import {useParams} from 'react-router-dom';
import img from '../../assets/image.png';
import burana from '../../assets/bgburana.jpg';
import img1 from '../../assets/stoneBurana.jpg';
import img2 from '../../assets/buranabig.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import bg from '../../assets/Burana.jpg';
import Header from "./../header/Header.jsx";
import SetRatingStar from "./SetRatingStar.jsx";
import CustomDatePicker from "./CalendarComponent.jsx";
import Favorite from "../TourCard/Favorite.jsx";
import Slider from "react-slick";
import './TourDetail.scss'
import Footer from "../footer/Footer.jsx";
import React, {useEffect, useState} from "react";

const BuranaDetails = () => {
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        // Прокрутка вверх с анимацией при монтировании
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Предзагрузка фона
        const img = new Image();
        img.src = bg;
        img.onload = () => {
            setBgLoaded(true);
        };
    }, []);

    const tour = {
        title: "Burana Tower",
        text: "Climb the ancient Burana Tower, explore the ruins of a\n" +
            "                                lost city, and uncover the secrets of the Silk Road",
        description: "The Burana Tower is a historic minaret located near the ancient city of Balasagun, once a thriving stop on the Silk Road. Built in the 11th century, it stands as one of the oldest architectural monuments in Central Asia. Visitors can climb to the top for panoramic views of the Chuy Valley. Surrounding the tower are ancient stone carvings known as balbals and remnants of old city walls. The site offers a fascinating glimpse into the region’s rich nomadic and Islamic heritage.",
        price: "$100",
        duration: "half day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [burana, img1, img2, img3, img4, img5, img6, img7],
        date: "2024-09-17",
    };

    if (!tour) return <div>Loading...</div>;
    const NextArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="arrowse next" onClick={onClick}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#091700"/>
                </svg>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className="arrowse prev" onClick={onClick}>
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
        slidesToShow: 3.7,
        centerPadding: '0px',
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return (
        <div className={'bg-cover bg-fixed bg-center relative'} style={{backgroundImage: `url(${bg})`}}>
            <div className={'absolute inset-0 bg-black/55'}></div>
            <div className="relative z-10 text-white">
                <Header svgColor="#fff"/>
                <div className="border-t px-20 py-6">
                    <h2 className={'text-3xl font-bold mb-5 text-red-700'}></h2>
                    <div className="flex justify-between">
                        <div className={'w-3/5'}>
                            <img src={tour.images[0]} alt="tour" className="rounded-lg w-full h-auto"/>
                            <h3 className="text-red-600 text-3xl font-bold mt-4">{tour.title}</h3>
                            <p className="text-lg font-semibold">{tour.text}</p>
                            <p className="text-white-600 my-4">{tour.description}</p>
                            <div className={'flex justify-between'}>
                                {/*<SetRatingStar/>*/}
                                {/*<Favorite/>*/}
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 relative h-fit w-1/3">
                            <div className={'absolute inset-0 backdrop-blur-2xl h-full'}></div>
                            <div className="relative z-10 border-2 p-6 rounded-lg h-fit">
                                <h3 className="text-green-500 text-2xl font-bold mb-6">Information</h3>
                                <ul className={'flex flex-col gap-4 mb-16'}>
                                    <li className={'flex justify-between'}>Price: <strong>{tour.price}</strong>
                                    </li>
                                    <li className={'flex justify-between'}>Duration: <strong>{tour.duration}</strong>
                                    </li>
                                    <li className={'flex justify-between'}>Number of people: <strong>{tour.groupSize}</strong></li>
                                    {/*<li className={'flex justify-between'}>Дети: <strong>{tour.kids}</strong></li>*/}
                                    <li className={'flex justify-between'}>Complexity: <strong>{tour.difficulty}</strong>
                                    </li>
                                </ul>
                                <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-md">
                                    Book
                                </button>
                            </div>
                            {/*<CustomDatePicker/>*/}
                        </div>

                    </div>
                </div>
                <div className={'mb-40'}>
                <Slider {...settings}>
                    {tour.images.map((img) => (
                        <img className="w-full h-64 object-cover" src={img} alt="Image"/>
                    ))}
                </Slider>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default BuranaDetails;
