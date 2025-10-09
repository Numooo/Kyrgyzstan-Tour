"use client"

import {useEffect} from "react";
import {motion} from "framer-motion";
import Slider from "react-slick";
import {useGetByIdLocation, useLocation} from "@/stores/locationStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useParams} from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
    const {id} = useParams();
    const location = useLocation()
    const getByIdLocation = useGetByIdLocation()
    useEffect(() => {
        getByIdLocation(id)
    }, [getByIdLocation, id]);
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);
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
        autoplay: true,
        delay: 7000,
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
    if (!location) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{backgroundImage: `url(${location.bg})`}}
            ></div>
            <div className={'absolute inset-0 bg-black/55'}></div>
            <div className="relative z-10 text-white">
                <Header svgColor="#fff"/>
                <motion.div className="border-t md:px-20 px-5 py-6" initial="hidden" animate="visible"
                            variants={fadeIn}>
                    <motion.h2 className='text-3xl font-bold mb-5 text-red-600 uppercase' variants={fadeIn}>
                        {location.region}
                    </motion.h2>
                    <div className="flex md:flex-row gap-5 flex-col justify-between">
                        <motion.div className='md:w-3/5 w-full' variants={fadeIn}>
                            <motion.img src={location.images[0]} alt="location" className="rounded-lg w-full h-auto"
                                        variants={fadeIn}/>
                            <motion.h3 className="text-red-600 text-3xl font-bold mt-4"
                                       variants={fadeIn}>{location.title}</motion.h3>
                            <motion.p className="text-lg font-semibold" variants={fadeIn}>{location.text}</motion.p>
                            <motion.p className="text-white-600 my-4" variants={fadeIn}>{location.description}</motion.p>
                        </motion.div>

                        <motion.div className="flex flex-col gap-10 relative h-fit w-full md:w-1/3" variants={fadeIn}>
                            <div className='absolute inset-0   h-full'></div>
                            <div className="relative z-10 border-2 p-6 rounded-lg h-fit backdrop-blur-2xl">
                                <h3 className="text-green-500 text-2xl font-bold mb-6">Information</h3>
                                <ul className='flex flex-col gap-4 mb-16'>
                                    <li className='flex justify-between'>Price: <strong>{location.price}</strong></li>
                                    <li className='flex justify-between'>Duration: <strong>{location.duration}</strong></li>
                                    <li className='flex justify-between'>Number of
                                        people: <strong className={'text-end'}>{location.groupSize}</strong></li>
                                    <li className='flex justify-between'>Complexity: <strong>{location.difficulty}</strong>
                                    </li>
                                </ul>

                                <a href="/Locations/">
                                    <motion.button
                                        whileHover={{scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 255, 100, 0.5)"}}
                                        whileTap={{scale: 0.95}}
                                        transition={{type: "spring", stiffness: 300}}
                                        className="mt-6 w-full bg-green-600 text-white py-2 rounded-md font-semibold"
                                    >
                                        Book
                                    </motion.button>
                                </a>

                            </div>
                            {location.mapUrl && (
                                <div className="relative pt-[56.25%] md:mt-10 rounded-lg overflow-hidden">
                                    <iframe
                                        src={location.mapUrl}
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

                {location?.images?.length > 0 && (
                    <motion.div
                        className="md:mb-40 mb-20 md:px-20"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <Slider {...settings}>
                            {location.images.map((img, i) => (
                                <motion.img
                                    key={i}
                                    className="w-full h-64 object-cover"
                                    src={img}
                                    alt={`slide-${i}`}
                                    variants={fadeIn}
                                />
                            ))}
                        </Slider>
                    </motion.div>
                )}
                <Footer/>
            </div>
        </div>
    );
};

export default Page;
