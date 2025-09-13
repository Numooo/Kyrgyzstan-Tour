import React, {useEffect, useState} from 'react';
import bg from '../../assets/bg2.jpg';
import LocationCard from "../TourCard/LocationCard.jsx";
import {Link} from "react-router-dom";
import Header from "../header/Header.jsx";
import burana from '../../assets/Burana.jpg';
import IK from '../../assets/issyk kul.jpg';
import AA from '../../assets/Altyn-Arashan-gorge-24.jpg';
import KelSuu from '../../assets/kelsuu2.jpg';
import AlaArcha from '../../assets/ala-archa.jpg';
import SonKol from '../../assets/SonKol.jpg';
import SaryChelek from '../../assets/онуч.jpeg';
import ChonKemin from '../../assets/chonKemin.jpg';
import Bishkek from '../../assets/bg2.jpg';
import Footer from "../footer/Footer.jsx";

const Locations = () => {
    const [bgLoaded, setBgLoaded] = useState(false);
    const [activeIndexes, setActiveIndexes] = useState([]);

    const handleCardClick = (index) => {
        setActiveIndexes(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    };

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const img = new Image();
        img.src = bg;
        img.onload = () => {
            setBgLoaded(true);
        };
    }, []);

    const cards = [{image: burana, title: 'Burana Tower'}, {
        image: IK, title: 'Issyl Kul Lake'
    }, {image: AA, title: 'Altyn Arashan'}, {
        image: KelSuu, title: 'Kel Suu lake'
    }, {image: SonKol, title: 'Song Kul lake'}, {
        image: AlaArcha, title: 'Ala Archa park'
    }, {image: SaryChelek, title: 'Sary Chelek lake'}, {
        image: ChonKemin, title: 'Chon Kemin valley'
    }, {image: Bishkek, title: 'Bishkek'},];

    // Список активных названий карточек
    const activeCards = activeIndexes.map(index => cards[index].title);

    // WhatsApp генератор
    const generateWhatsAppLink = () => {
        const message = `Hello! I'm writing to you from your website - Kyrgyzstan.Tour! I would like to visit the following places:\n\n${activeCards.map(title => `- ${title}`).join('\n')}`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '996700057879';
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    return (

        <div className="relative">
            <div className="relative overflow-hidden">
                <div
                    className={`fixed inset-0 -z-10 md:bg-center bg-cover transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{backgroundImage: `url(${bg})`}}
                ></div>

                <div className="absolute inset-0 bg-black/30 z-0"/>

                {!bgLoaded && (<div className="fixed inset-0 z-10 bg-black flex items-center justify-center">
                    <div
                        className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>)}

                <div className="relative z-10">
                    <Header/>
                    <div className={'flex flex-col m-auto md:container px-5 text-white text-3xl mt-8'}>
                        <h1 className={"md:text-5xl text-3xl text-center font-bold md:pt-56 md:pb-80 pt-40 pb-60"}>
                            Let’s create your personalized trip together!
                        </h1>
                        <h2 className="flex text-2xl font-bold text-gray-300 md:pl-40 md:mb-3">
                            Start by choosing your favorite location cards:
                        </h2>
                    </div>

                    <div className="md:container m-auto md:mt-0 px-5 flex justify-center flex-wrap md:gap-10">
                        {cards.map((card, index) => (<div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`md:w-1/4 mb-4 md:mb-0 w-full py-3 h-fit rounded-2xl relative border-2 transition-all duration-300 cursor-pointer ${activeIndexes.includes(index) ? 'backdrop-blur-2xl border-3 bg-white/30 border-white' : 'border-2 border-black'}`}>
                            <div className="absolute inset-0 backdrop-blur-none bg-black/35 rounded-2xl"></div>
                            <div className="relative h-content z-10 px-4 flex flex-col justify-between">
                                <div>
                                    <div
                                        className="rounded-xl h-[226px] w-full bg-cover bg-center"
                                        style={{backgroundImage: `url(${card.image})`}}
                                    ></div>
                                    <h5 className="text-lg font-semibold mt-2 flex justify-between items-center">{card.title}
                                        <span className="text-[#61e708] font-bold text-2xl">
                                {activeIndexes.includes(index) &&
                                    (<svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.72 6.79L8.43001 11.09L6.78 9.44C6.69036 9.33532 6.58004 9.2503 6.45597 9.19027C6.33191 9.13025 6.19678 9.09652 6.05906 9.0912C5.92134 9.08588 5.78401 9.10909 5.65568 9.15936C5.52736 9.20964 5.41081 9.28589 5.31335 9.38335C5.2159 9.4808 5.13964 9.59735 5.08937 9.72568C5.03909 9.854 5.01589 9.99133 5.02121 10.1291C5.02653 10.2668 5.06026 10.4019 5.12028 10.526C5.1803 10.65 5.26532 10.7604 5.37 10.85L7.72 13.21C7.81344 13.3027 7.92426 13.376 8.0461 13.4258C8.16794 13.4755 8.2984 13.5008 8.43001 13.5C8.69234 13.4989 8.94374 13.3947 9.13 13.21L14.13 8.21C14.2237 8.11704 14.2981 8.00644 14.3489 7.88458C14.3997 7.76272 14.4258 7.63201 14.4258 7.5C14.4258 7.36799 14.3997 7.23728 14.3489 7.11542C14.2981 6.99356 14.2237 6.88296 14.13 6.79C13.9426 6.60375 13.6892 6.49921 13.425 6.49921C13.1608 6.49921 12.9074 6.60375 12.72 6.79ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
                                            fill="#61e708"
                                        />
                                    </svg>)}
                            </span>
                                    </h5>
                                </div>
                            </div>
                        </div>))}
                    </div>

                    {activeCards.length > 0 && (<a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all z-50"
                    >
                        Send in WhatsApp
                    </a>)}
                    <div className={'mt-10'}>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>);
};

export default Locations;
