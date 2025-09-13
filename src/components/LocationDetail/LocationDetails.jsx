import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

import AA from '../../assets/AAmain5.jpg';
import AAimg1 from '../../assets/AAbg2.jpg';
import AAimg2 from '../../assets/AAbg3.jpg';
import AAimg3 from '../../assets/AAbg4.jpg';
import AAimg4 from '../../assets/AAbg5.avif';
import AAimg5 from '../../assets/AAbg6.jpg';
import AAimg6 from '../../assets/horserideAA.webp';
import AAimg7 from '../../assets/hots.jpeg';
import AAbg from '../../assets/AAbg6.jpg';

import burana from '../../assets/bgburana.jpg';
import buranaimg1 from '../../assets/stoneBurana.jpg';
import buranaimg2 from '../../assets/buranabig.jpg';
import buranaimg3 from '../../assets/img3.jpg';
import buranaimg4 from '../../assets/img4.jpg';
import buranaimg5 from '../../assets/img5.jpg';
import buranaimg6 from '../../assets/img6.jpg';
import buranaimg7 from '../../assets/img7.jpg';
import buranabg from '../../assets/Burana.jpg';

import Header from "./../header/Header.jsx";
import Slider from "react-slick";
import './TourDetail.scss'
import Footer from "../footer/Footer.jsx";
import {Link, useLocation} from "react-router-dom";

import Ikimg1 from "../../assets/ik5.jpg";
import Ikimg2 from "../../assets/ik4.jpg";
import Ikimg3 from "../../assets/ik3.jpg";
import Ikimg4 from "../../assets/ik2.jpg";
import Ikimg5 from "../../assets/ik1.jpg";
import Ikimg6 from "../../assets/jetioguz.jpg";
import Ikimg7 from "../../assets/ik6.jpg";
import Ik from '../../assets/issyk kul.jpg';
import Ikbg from '../../assets/ikback2.jpg';

import kelsuubg from '../../assets/kelsuuback.jpg';
import kelsuumain from '../../assets/ksmaingbg.jpg';
import kelsuuimg1 from '../../assets/kelsuuMain.jpg';
import kelsuuimg2 from '../../assets/kelsuu2.jpg'
import kelsuuimg3 from '../../assets/kelsuuMain.jpg';
import kelsuuimg4 from '../../assets/kelsuu6.jpg';
import kelsuuimg5 from '../../assets/kelsuu4.jpg';
import kelsuuimg6 from '../../assets/kelsuu5.jpg';
import kelsuuimg7 from '../../assets/kelsuu6.jpg';

import sonkolbg from '../../assets/sonkolbg.jpg';
import sonkolmain from '../../assets/sonkolmain.jpg';
import sonkolimg1 from '../../assets/sonkolimg1.jpg';
import sonkolimg2 from '../../assets/sonkolimg2.webp';
import sonkolimg3 from '../../assets/sonkolimg3.webp';
import sonkolimg4 from '../../assets/sonkolimg4.jpg';
import sonkolimg5 from '../../assets/sonkolimg5.jpg';
import sonkolimg6 from '../../assets/sonkolimg6.webp';
import sonkolimg7 from '../../assets/sonkolimg7.webp';

import alarchabg from '../../assets/alarchabg.jpg';
import alarchamain from '../../assets/alarchamain.jpg';
import alarchaimg1 from '../../assets/alarchaimg1.jpg';
import alarchaimg2 from '../../assets/alarchaimg2.jpg'
import alarchaimg3 from '../../assets/alarchaimg3.webp';
import alarchaimg4 from '../../assets/alarchaimg4.jpg';
import alarchaimg5 from '../../assets/alarchaimg5.jpg';
import alarchaimg6 from '../../assets/alarchaimg6.jpg';
import alarchaimg7 from '../../assets/alarchaimg7.jpeg';

import sarychelekmain from '../../assets/онуч.jpeg';
import sarychelekbg from '../../assets/sarychelekbg.jpg';
import sarychelekimg1 from '../../assets/sarychelekimg1.jpg';
import sarychelekimg2 from '../../assets/sarychelekimg2.jpg'
import sarychelekimg3 from '../../assets/sarychelekimg3.jpg';
import sarychelekimg4 from '../../assets/sarychelekimg4.webp';
import sarychelekimg5 from '../../assets/sarychelekimg5.jpg';
import sarychelekimg6 from '../../assets/sarychelekimg6.jpg';
import sarychelekimg7 from '../../assets/sarychelekimg7.jpg';


import chkmain from '../../assets/chkmimg5.jpg';
import chkmbg from '../../assets/chkmbg2.webp';
import chkmimg1 from '../../assets/chkmain.jpg';
import chkmimg2 from '../../assets/chkmimg2.jpg'
import chkmimg3 from '../../assets/chkmimg3.webp';
import chkmimg4 from '../../assets/chkmimg4.jpg';
import chkmimg5 from '../../assets/chkmimg5.jpg';
import chkmimg6 from '../../assets/chkmimg6.jpg';
import chkmimg7 from '../../assets/chkmimg7.jpg';

import bgbishkek from '../../assets/bgbishkek.jpg';
import bishmain from '../../assets/bishmain1.jpg';
import bishimg1 from '../../assets/bishimg1.jpg';
import bishimg2 from '../../assets/bishimg2.jpg';
import bishimg3 from '../../assets/bishimg3.webp';
import bishimg4 from '../../assets/bishimg4.jpg';
import bishimg5 from '../../assets/bishimg5.jpg';
import bishimg6 from '../../assets/bishimg6.jpg';
import bishimg7 from '../../assets/bishimg7.webp';


const LocationDetails = () => {
    const [bgLoaded, setBgLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        const img = new Image();
        img.onload = () => setBgLoaded(true);
    }, []);

    const Burana = {
        region: "Tokmok city",
        title: "Burana Tower",
        text: "Climb the ancient Burana Tower, explore the ruins of a\n" +
            "                                lost city, and uncover the secrets of the Silk Road",
        description: "The Burana Tower is a historic minaret located near the ancient city of Balasagun, once a thriving stop on the Silk Road. Built in the 11th century, it stands as one of the oldest architectural monuments in Central Asia. Visitors can climb to the top for panoramic views of the Chuy Valley. Surrounding the tower are ancient stone carvings known as balbals and remnants of old city walls. The site offers a fascinating glimpse into the region’s rich nomadic and Islamic heritage.",
        price: "$100",
        duration: "half day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [burana, buranaimg1, buranaimg2, buranaimg3, buranaimg4, buranaimg5, buranaimg6, buranaimg7],
        date: "2024-09-17",
        bg: buranabg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148271.48263522369!2d75.21231663234731!3d42.72218936336493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389bf32870df08df%3A0x4edd488a84c126d8!2sBurana!5e0!3m2!1sen!2skg!4v1750414277741!5m2!1sen!2skg\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade"
    };
    const Issyk = {
        region: "Issyk Kul region",
        title: "Issyk Kul lake",
        text: "Swim in the crystal-clear waters of Issyk-Kul Lake, relax on its golden beaches, admire the surrounding majestic mountains, and discover the legends of the Pearl of the Silk Road.",
        description: "Issyk-Kul Lake, often called the \"Pearl of the Silk Road,\" is a vast alpine lake nestled among the towering Tien Shan mountains. As one of the largest and deepest saline lakes in the world, it never freezes—even in winter—thanks to its unique mineral composition. For centuries, it served as a resting place for traders and travelers on the Silk Road. Today, visitors can enjoy its crystal-clear waters, explore nearby petroglyphs, and take in breathtaking views of the surrounding snow-capped peaks, making it a perfect blend of natural beauty and ancient history.",
        price: "$150",
        duration: "full day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [Ik, Ikimg1, Ikimg2, kelsuuimg3, Ikimg4, Ikimg5, Ikimg6, Ikimg7],
        date: "2024-09-17",
        bg: Ikbg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753529.5054447751!2d76.59467967357321!3d42.460193142655875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3885ab108e4effa9%3A0x7621f668ba6d1c83!2sIssyk%20Kul!5e0!3m2!1sen!2skg!4v1750414524253!5m2!1sen!2skg\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade"
    };


    const Altyn = {
        region: "Issyk Kul region",
        title: "Altyn Arashan gorge",
        text: "Relax in natural hot springs surrounded by alpine meadows, hike through the breathtaking Altyn Arashan valley, meet nomadic shepherds, and enjoy the tranquility of this hidden mountain paradise.",
        description: "Altyn Arashan, meaning 'Golden Spa' in Kyrgyz, is a picturesque mountain valley famous for its hot springs and lush alpine meadows. Nestled along the Arashan River and surrounded by snow-capped peaks, it offers a perfect retreat into the heart of nature. Accessible by a rugged trail from Karakol, this remote paradise rewards travelers with wooden hot spring cabins, pristine hiking routes, and the chance to meet friendly locals and nomads. Whether soaking in the healing mineral waters or trekking to nearby glaciers, Altyn Arashan promises both adventure and serenity.",
        price: "$200",
        duration: "full day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [AA, AAimg1, AAimg2, AAimg3, AAimg4, AAimg5, AAimg6, AAimg7],
        date: "2024-09-17",
        bg: AAbg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.167746887006!2d78.60408771168989!3d42.38157287107079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38864b7ff6492d79%3A0x173f0efe7295042!2sAltyn-Arashan!5e0!3m2!1sen!2skg!4v1750414707181!5m2!1sen!2skg\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade"
    };

    const Kelsuu = {
        region: "Naryn region",
        title: "Kel Suu lake",
        text: "Explore the hidden gem of Kel Suu Lake, nestled high in the Tian Shan mountains near the Chinese border. Embark on an off-road adventure through dramatic valleys, marvel at the emerald waters surrounded by towering cliffs, and experience the untouched beauty of one of Kyrgyzstan’s most remote and mysterious alpine lakes.",
        description: "Kel Suu Lake is a hidden alpine treasure tucked away in the remote borderlands of Naryn Region near China. Surrounded by dramatic cliffs and sculpted rock formations, this glacial lake appears and disappears depending on the season, fed by underground rivers. Reaching it requires an adventurous off-road journey through the rugged Kok-Kiya Valley, making the destination all the more rewarding. With its turquoise waters, surreal landscape, and complete seclusion from civilization, Kel Suu offers an unforgettable experience for intrepid travelers seeking untouched natural beauty and mystery.",
        price: "$150",
        duration: "full day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [kelsuumain, kelsuuimg1, kelsuuimg2, kelsuuimg3, kelsuuimg4, kelsuuimg5, kelsuuimg6, kelsuuimg7],
        date: "2024-09-17",
        bg: kelsuubg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12110.366345903543!2d76.3952348065026!3d40.63888804056359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3891e32bea583eeb%3A0x6d0fa0afc331faae!2zS8O2bC1TdXU!5e0!3m2!1sen!2skg!4v1750414930454!5m2!1sen!2skg\"width=\"600\" height=\"450\" style=\"border:0;\" allowFullScreen=\"\" loading=\"lazy\"referrerPolicy=\"no-referrer-when-downgrade"
    };

    const Sonkol = {
        region: "Naryn region",
        title: "Song Kul lake",
        text: "Discover the serene beauty of Son-Kul Lake, a high-altitude alpine lake surrounded by rolling pastures and nomadic yurt camps. Experience traditional Kyrgyz culture, ride horses across vast meadows, and enjoy the peaceful wilderness far from the crowds.",
        description: "Son-Kul Lake is a pristine alpine lake located in the heart of Kyrgyzstan’s highlands, surrounded by vast mountain pastures and traditional nomadic settlements. Known for its crystal-clear waters and rich biodiversity, it offers visitors an authentic experience of Kyrgyz nomadic life. The lake’s remote location and peaceful environment make it an ideal destination for hiking, horseback riding, and camping under the stars, far from modern civilization.",
        price: "$150",
        duration: "full day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [sonkolmain, sonkolimg1, sonkolimg2, sonkolimg3, sonkolimg4, sonkolimg5, sonkolimg6, sonkolimg7],
        date: "2024-09-17",
        bg: sonkolbg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190234.09140045842!2d74.86122788650788!3d41.8410511319157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389a176a9911ddb3%3A0x317f9b05fc2574a1!2sSong-Kul!5e0!3m2!1sen!2skg!4v1750417003032!5m2!1sen!2skg\"width=\"600\" height=\"450\" style=\"border:0;\" allowFullScreen=\"\" loading=\"lazy\"referrerPolicy=\"no-referrer-when-downgrade"
    };

    const alarcha = {
        region: "Chui region",
        title: "Ala-Archa National park",
        text: "Hike through the stunning gorges of Ala Archa National Park, breathe in the crisp mountain air, and marvel at snow-capped peaks just a short drive from Bishkek.",
        description: "Ala Archa National Park, nestled in the Tian Shan mountains just 40 km from Bishkek, is a stunning natural reserve known for its alpine scenery, glacier-fed rivers, and dramatic gorges. Once a favorite training ground for Soviet mountaineers, the park now attracts hikers, climbers, and nature lovers from around the world. Visitors can explore scenic trails, picnic by crystal-clear streams, or attempt challenging ascents to peaks like Uchitel. Its rich biodiversity and easy access make it a must-visit escape into Kyrgyzstan’s wilderness.",
        price: "$100",
        duration: "half day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [alarchamain, alarchaimg1, alarchaimg2, alarchaimg3, alarchaimg4, alarchaimg5, alarchaimg6, alarchaimg7],
        date: "2024-09-17",
        bg: alarchabg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.779340156461!2d74.4777380117035!3d42.64483767104758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3899315dc3d516fb%3A0x9d52fa7255944e52!2sAla%20Archa%20National%20Park!5e0!3m2!1sen!2skg!4v1750418255215!5m2!1sen!2skg\"width=\"600\"height=\"450\"style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"referrerpolicy=\"no-referrer-when-downgrade"
    };

    const sarychelek = {
        region: "Jalal-Abad region",
        title: "Sary Chelek lake",
        text: "Explore the pristine wilderness of Sary-Chelek Biosphere Reserve, hike through lush forests and deep gorges, and discover the serene beauty of the alpine lake surrounded by towering peaks.",
        description: "Sary-Chelek Biosphere Reserve is a pristine natural sanctuary located in the Western Tian Shan mountains. Known for its deep canyons, dense forests, and the stunning Sary-Chelek Lake, this UNESCO-listed reserve offers visitors a peaceful retreat to explore diverse wildlife, alpine meadows, and crystal-clear waters. It's a perfect destination for hiking, birdwatching, and reconnecting with untouched nature far from the city bustle.",
        price: "$100",
        duration: "half day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [sarychelekmain, sarychelekimg1, sarychelekimg2, sarychelekimg3, sarychelekimg4, sarychelekimg5, sarychelekimg6, sarychelekimg7],
        date: "2024-09-17",
        bg: sarychelekbg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.810563606245!2d71.93755371166505!3d41.89693097111969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a477e9b9a78199%3A0xc50db17847bef729!2sSary-Chelek%20Biosphere%20Reserve!5e0!3m2!1sen!2skg!4v1750492089745!5m2!1sen!2skg"
    };

    const ChonKemin = {
        region: "Chui Region",
        title: "Chon Kemin valley",
        text: "Explore the stunning Chon-Kemin Valley on horseback, ride through alpine meadows and rivers, and experience the peaceful beauty of Kyrgyz mountains.",
        description: "Chon-Kemin Valley is a breathtaking mountain valley located in the Northern Tian Shan range, known for its lush meadows, crystal-clear rivers, and rich nomadic heritage. Visitors can embark on thrilling horseback riding tours, experience exhilarating rafting adventures along the valley’s fast-flowing rivers, hike through pristine alpine forests and expansive pastures, and immerse themselves in the authentic Kyrgyz mountain lifestyle. This valley offers the perfect blend of adventure, natural beauty, and cultural discovery, making it an unforgettable destination for all types of travelers.",
        price: "$100",
        duration: "half day",
        groupSize: "from 1 to 10 persons",
        difficulty: "Easy",
        images: [chkmain, chkmimg1, chkmimg2, chkmimg3, chkmimg4, chkmimg5, chkmimg6, chkmimg7],
        date: "2024-09-17",
        bg: chkmbg,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187598.41877695752!2d75.96662634900206!3d42.72012201698356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389b6996fb17fff3%3A0x1495f6a9fa060fee!2sChon-Kemin!5e0!3m2!1sen!2skg!4v1750426361358!5m2!1sen!2skg\"width=\"600\" height=\"450\" style=\"border:0;\" allowFullScreen=\"\" loading=\"lazy\"referrerPolicy=\"no-referrer-when-downgrade"
    };

    const Bishkek = {
            region: "Chui Region",
            title: "Bishkek and around of city",
            text: "Discover the vibrant city of Bishkek and escape to nearby mountain getaways like Chunkurchak, Kashka-Suu, and Ala-Medin Gorge. Just a short drive from the capital, these scenic spots offer hiking, picnicking, and breathtaking views—perfect for a day trip into the heart of Kyrgyz nature",
            description: "Discover Bishkek, Kyrgyzstan’s vibrant capital nestled at the foot of the Tian Shan mountains. Explore its wide boulevards, green parks, and bustling bazaars. Just outside the city, enjoy day trips to breathtaking spots like Ala-Archa National Park, the ski resort of Chunkurchak, the peaceful Kashka-Suu valley, and the scenic Ala-Medina gorge. It’s the perfect gateway to nature, adventure, and culture—all in one place.\"\n" +
                "\n",
            price: "$100",
            duration: "half day",
            groupSize: "from 1 to 10 persons",
            difficulty: "Easy",
            images: [bishmain, bishimg1, bishimg2, bishimg3, bishimg4, bishimg5, bishimg6, bishimg7],
            date: "2024-09-17",
            bg: bgbishkek,
            mapUrl: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93549.52240711205!2d74.52310609949508!3d42.88503033100999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec86a8bb5b873%3A0x222c5538e7365c36!2sBishkek%20City!5e0!3m2!1sen!2skg!4v1750440901792!5m2!1sen!2skg\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade"
        }
    ;


    const {Card} = location.state
    console.log(Card)
    let tour
    if (Card.includes('Burana')) {
        tour = Burana;
    } else if (Card.includes('Altyn')) {
        tour = Altyn;
    } else if (Card.includes('Issyk')) {
        tour = Issyk;
    } else if (Card.includes('Kelsuu')) {
        tour = Kelsuu;
    } else if (Card.includes('Sonkol')) {
        tour = Sonkol;
    } else if (Card.includes('alarcha')) {
        tour = alarcha;
    } else if (Card.includes('sarychelek')) {
        tour = sarychelek;
    } else if (Card.includes('ChonKemin')) {
        tour = ChonKemin;
    } else if (Card.includes('Bishkek')) {
        tour = Bishkek;
    }
    const fadeIn = {
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
    };

    const NextArrow = ({onClick}) => (
        <div className="arrowse next" onClick={onClick}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#091700"/>
            </svg>
        </div>
    );

    const PrevArrow = ({onClick}) => (
        <div className="arrowse prev" onClick={onClick}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#091700"/>
            </svg>
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.7,
        centerMode: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
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
        <div className="relative overflow-hidden">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{backgroundImage: `url(${tour.bg})`}}
            ></div>
            <div className={'absolute inset-0 bg-black/55'}></div>
            <div className="relative z-10 text-white">
                <Header svgColor="#fff"/>
                <motion.div className="border-t md:px-20 px-5 py-6" initial="hidden" animate="visible"
                            variants={fadeIn}>
                    <motion.h2 className='text-3xl font-bold mb-5 text-red-600 uppercase' variants={fadeIn}>
                        {tour.region}
                    </motion.h2>
                    <div className="flex md:flex-row gap-5 flex-col justify-between">
                        <motion.div className='md:w-3/5 w-full' variants={fadeIn}>
                            <motion.img src={tour.images[0]} alt="tour" className="rounded-lg w-full h-auto"
                                        variants={fadeIn}/>
                            <motion.h3 className="text-red-600 text-3xl font-bold mt-4"
                                       variants={fadeIn}>{tour.title}</motion.h3>
                            <motion.p className="text-lg font-semibold" variants={fadeIn}>{tour.text}</motion.p>
                            <motion.p className="text-white-600 my-4" variants={fadeIn}>{tour.description}</motion.p>
                        </motion.div>

                        <motion.div className="flex flex-col gap-10 relative h-fit w-full md:w-1/3" variants={fadeIn}>
                            <div className='absolute inset-0   h-full'></div>
                            <div className="relative z-10 border-2 p-6 rounded-lg h-fit backdrop-blur-2xl">
                                <h3 className="text-green-500 text-2xl font-bold mb-6">Information</h3>
                                <ul className='flex flex-col gap-4 mb-16'>
                                    <li className='flex justify-between'>Price: <strong>{tour.price}</strong></li>
                                    <li className='flex justify-between'>Duration: <strong>{tour.duration}</strong></li>
                                    <li className='flex justify-between'>Number of
                                        people: <strong className={'text-end'}>{tour.groupSize}</strong></li>
                                    <li className='flex justify-between'>Complexity: <strong>{tour.difficulty}</strong>
                                    </li>
                                </ul>

                                <Link to="/Locations/">
                                    <motion.button
                                        whileHover={{scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 255, 100, 0.5)"}}
                                        whileTap={{scale: 0.95}}
                                        transition={{type: "spring", stiffness: 300}}
                                        className="mt-6 w-full bg-green-600 text-white py-2 rounded-md font-semibold"
                                    >
                                        Book
                                    </motion.button>
                                </Link>

                            </div>
                            {tour.mapUrl && (
                                <div className="relative pt-[56.25%] md:mt-10 rounded-lg overflow-hidden">
                                    <iframe
                                        src={tour.mapUrl}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 0
                                        }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Location map"
                                    />
                                </div>
                            )}

                        </motion.div>
                    </div>
                </motion.div>

                <motion.div className="md:mb-40 mb-20 md:px-20" initial="hidden" animate="visible" variants={fadeIn}>
                    <Slider {...settings}>
                        {tour.images.map((img, i) => (
                            <motion.img key={i} className="w-full h-64 object-cover" src={img} alt={`slide-${i}`}
                                        variants={fadeIn}/>
                        ))}
                    </Slider>
                </motion.div>

                <Footer/>
            </div>
        </div>
    );
};

export default LocationDetails;
