import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import bg from '../../assets/bg2.jpg';
import Header from "../header/Header.jsx";
import burana from '../../assets/Burana.jpg';
import IK from '../../assets/issyk kul.jpg';
import KelSuu from '../../assets/kelsuu2.jpg';
import SonKol from '../../assets/SonKol.jpg';
import KashkaSuu from '../../assets/ksuu.jpg';
import skybridge from '../../assets/оналты.png';
import alaarcha from '../../assets/ala-archa.jpg';
import tour4 from '../../assets/jetioguz.jpg';
import tour5 from '../../assets/ik2.jpg';
import tour6 from '../../assets/first_back.jpg';
import tour7 from '../../assets/sonkolimg2.webp';
import tour8 from '../../assets/тогуз.jpg';
import tour9 from '../../assets/ik7.jpg';

const Locations = () => {
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const img = new Image();
        img.src = bg;
        img.onload = () => {
            setBgLoaded(true);
        };
    }, []);

    const cards = [
        {
            image: alaarcha,
            days: 1,
            description: 'Easy walk in national nature park and enjoy with amazing view in Kashka Suu gorge Ski base on the Cable cars ',
            locations: ['  National Park "Ala-Archa"', 'Panorama Trail', 'Cable cars', 'Ski base']
        },
        {
            image: KashkaSuu,
            days: 1,
            description: 'Short trip to a popular ski base.',
            locations: ['Kashka Suu', 'ZIL Ski Base']
        },
        {
            image: skybridge,
            days: 2,
            description: 'Family-friendly weekend tour.',
            locations: ['Chunkurchak', 'Sky Bridge', 'Panoramic Cafe']
        },
        {
            image: burana,
            days: 2,
            description: 'Visit Burana Tower, ride horses in Chon-Kemin Valley, and explore Kok-Moynok Canyon — all',
            locations: ['"Burana" Tower', '"National park "Ala-Archa"', 'Chon Kemin valley', 'Kok Moinok canyon', 'Chon Kemin valley',]
        },
        {
            image: IK,
            days: 3,
            description: 'Enjoy views from the Sky Bridge, explore ancient Burana tower, horse ride tour on the mountains with the pearl of Kyrgyzstan - Issyk Kul lake',
            locations: ['Issyk-Kul Lake', 'Cholpon-Ata', 'Burana tower', 'Ala-Archa National Park', 'Kashka-Suu gorge', 'Chunkurchak gorge', 'Chon-Kemin valley']
        },
        {
            image: SonKol,
            days: 4,
            description: 'Nomadic lifestyle and horseback riding.',
            locations: ['Son-Kul Lake', 'Kyzart Pass', 'Yurt stay']
        },
        {
            image: tour4,
            days: 4,
            description: 'Tour around Bishkek and Issyk-Kul Lake.',
            locations: ['Zheti-Oguz Gorge', 'Ala Archa National Park', 'Chunkurchak Gorge', 'Issyk-Kul Lakes', 'Altyn-Arashan']
        },
        {
            image: tour5,
            days: 5,
            description: 'Enjoy horseback riding, boat trips, cultural experiences, and authentic cuisine.',
            locations: ['Rukh Ordo Ethno Complex', 'Chon Kemin', 'Issyk-Kul Lake', 'Chunkurchak Gorge', 'Kok Moynok Canyon', 'Burana Tower', 'Bishkek city']
        },
        {
            image: KelSuu,
            days: 5,
            description: 'Adventure deep into remote alpine lakes.',
            locations: ['Kel Suu', 'Naryn', 'Ak-Sai Valley']
        },
        {
            image: tour6,
            days: 6,
            description: 'Experience hot springs, eagle shows, yurt stays, and traditional Kyrgyz cuisine.',
            locations: ['Barskoon Gorge', 'Chunkurchak Gorge', 'Burana Tower', 'Chon Kemin', 'Issyk-Kul Lake', 'Boom Gorge', 'Zheti-Oguz Gorge', 'Altyn-Arashan Gorge', 'Karakol']
        },
        {
            image: tour7,
            days: 7,
            description: 'A perfect mix of nature, adventure, and tradition.',
            locations: ['Chon-Kemin', 'Burana Tower', 'Chunkurchak Gorge', 'Issyk-Kul Lake', 'Zheti-Oguz Gorge', 'Altyn-Arashan Gorge', 'Karakol', 'Rukh Ordo Cultural Center']
        },
        {
            image: tour8,
            days: 8,
            description: 'Enjoy horseback riding, eagle shows, yurt stays, hot springs, and breathtaking landscapes.',
            locations: ['Kirchyn Gorge', 'Chon-Kemin', 'Burana Tower', 'Chunkurchak Gorge', 'Issyk-Kul Lake', 'Zheti-Oguz Gorge', 'Altyn-Arashan Gorge', 'Ala Archa Gorge', 'Grigorievskoye Gorge', 'Rukh Ordo Cultural Center']
        },
        {
            image: tour9,
            days: 9,
            description: 'Adventure across Kyrgyzstan, gorges, Issyk-Kul Lake, yurt stays, eagle shows, hot springs.',
            locations: ['Cholpon-Ata', 'Ala Archa Gorge', 'Chunkurchak Gorge', 'Burana Tower', 'Chon-Kemin Gorge', 'Issyk-Kul Lake', 'Zheti-Oguz Gorge', 'Fairy Tale Canyon', 'Karakol Gorge', 'Altyn-Arashan Gorge', 'Kashka-Suu Gorge']
        },
    ];

    return (
        <div className="relative">
            <div
                className={`fixed inset-0 bg-center bg-cover bg-fixed transition-opacity duration-1000 z-0 ${
                    bgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{backgroundImage: `url(${bg})`}}
            ></div>

            <div className="absolute inset-0 bg-black/30 z-0"/>

            {!bgLoaded && (
                <div className="fixed inset-0 z-10 bg-black flex items-center justify-center">
                    <div
                        className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            <div className="relative z-10">
                <Header/>
                <div className="md:w-2/3 pt-24 pb-28 md:pt-44 md:pb-56 text-center gap-8 flex items-center m-auto justify-center flex-col md:container text-white  mt-8">
                    <h1 className={'md:text-5xl text-4xl font-bold text-red-500'}>Multidays tours in Kyrgyzstan
                        </h1>
                    <h2 className=" text-center text-2xl">If you want to take a cultural tour or visit other places. We are glad to have your tour according to your request.</h2>
                </div>

                <div className="md:container m-auto flex md:px-20 justify-between flex-wrap gap-4 py-10">
                    {cards.map((card, index) => (
                        <Link
                            to="/TourDetails/"
                            key={index}
                            state={{ Card: card.locations[0] }}
                            className="mb-20 w-full md:min-h-[432px] h-content pt-3 pb-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300"
                        >
                            <div className="absolute inset-0 backdrop-blur-3xl rounded-3xl"></div>

                            <div className="relative h-full z-10 px-4 flex flex-col md:flex-row justify-between gap-10">
                                <div
                                    className="overflow-hidden rounded-xl w-full md:w-1/2 md:h-full h-72 bg-cover bg-center pt-5 duration-700 text-2xl uppercase font-bold text-green-600"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                ><span className={'p-2 rounded-r'} style={{background: `linear-gradient(to right, rgba(0, 47, 74, 0.8), rgba(0, 47, 74, 0.7))`}}>{card.days} days</span></div>

                                <div className="md:w-1/2 w-full flex flex-col md:h-full">
                                    <div className="flex flex-col md:flex-grow">
                                        <h5 className="text-green-600 text-2xl font-semibold my-2">
                                            {card.description} in {card.days} days
                                        </h5>
                                        <ul className="text-white text-sm space-y-1 list-none">
                                            {card.locations.map((loc, i) => (
                                                <li className="text-xl" key={i}>
                                                    {loc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-6">
                                        <button className="bg-green-600 rounded-2xl text-white px-5 py-2 border-2 border-green-600 transition-all duration-300 hover:border-white hover:bg-green-700 hover:scale-105">
                                            More details ➜
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Locations;
