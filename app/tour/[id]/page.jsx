"use client"
import {useEffect, useState} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useGetByIdTour, useTour} from "@/stores/tourStore";
import {useParams} from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

const CardDetails = () => {
    const tour = useTour()
    const getByIdTour = useGetByIdTour()
    const {id} = useParams()
    useEffect(() => {
        getByIdTour(id)
    }, [getByIdTour, id]);
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    const inclusions = [
        "Comfortable hotel accommodation (you will stay in different hotels along the route, depending on the location)",
        "All transfers included",
        "Professional guide support 24/7",
        "Horseback riding",
        "Beautiful new location to explore every day"
    ]

    const exclusions = [
        "Flight tickets",
        "3 meals a day (breakfast, lunch, dinner)",
        "Pocket expenses",
        "Insurance"
    ]
    if (!tour) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                Loading...
            </div>
        );
    }
    return (
        <div className="relative">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{backgroundImage: `url(${tour.banner})`}}
            ></div>

            <div className={"h-screen"}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col h-2/3 justify-between md:h-1/2 text-white">
                    <Header/>
                    <h1 className="font-bold text-3xl md:text-[64px] text-center p-4">{tour.title}</h1>
                </div>
            </div>

            <div className="relative z-20 flex flex-col md:flex-row p-4 sm:p-6">
                <div className="w-full md:w-2/3 p-4 sm:p-6 rounded-lg shadow-md bg-white/45 backdrop-blur-md relative overflow-hidden">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Itinerary</h3>
                    <div className="mt-4">
                        {tour.itineraries.map((itinerary, index) => {
                            const isOpen = openIndexes.includes(index);

                            return (
                                <div key={itinerary.id} className="border-b border-gray-300">
                                    <button
                                        className="flex items-center justify-between w-full py-3 sm:py-4 px-3 sm:px-4 text-left text-base sm:text-lg font-semibold"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span>Day {index + 1}. {itinerary.title}</span>
                                        {isOpen ? "−" : "+"}
                                    </button>

                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden`}
                                        style={{
                                            maxHeight: isOpen ? "1000px" : "0px",
                                        }}
                                    >
                                        <div className="p-4 flex flex-wrap gap-2">
                                            {itinerary.image.map((el, i) => (
                                                <img
                                                    key={i}
                                                    src={el}
                                                    className="md:w-[calc(50%-0.5rem)] w-full h-64 sm:h-64 object-cover rounded-lg mb-1"
                                                    alt={`Itinerary ${index + 1} Image ${i + 1}`}
                                                />
                                            ))}
                                            <p className="text-gray-700">{itinerary.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    <div className="mt-4 md:flex md:flex-col items-start gap-5">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 text-nowrap w-32">What's
                            included</h3>
                        <div className="flex flex-col space-y-2 pt-1">
                            {inclusions.map((item, index) => (
                                <div key={index}
                                     className="flex items-center text-gray-700 text-sm sm:text-base gap-1 px-3">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-shrink-0"
                                    >
                                        <path
                                            d="M12.72 6.79L8.43001 11.09L6.78 9.44C6.69036 9.33532 6.58004 9.2503 6.45597 9.19027C6.33191 9.13025 6.19678 9.09652 6.05906 9.0912C5.92134 9.08588 5.78401 9.10909 5.65568 9.15936C5.52736 9.20964 5.41081 9.28589 5.31335 9.38335C5.2159 9.4808 5.13964 9.59735 5.08937 9.72568C5.03909 9.854 5.01589 9.99133 5.02121 10.1291C5.02653 10.2668 5.06026 10.4019 5.12028 10.526C5.1803 10.65 5.26532 10.7604 5.37 10.85L7.72 13.21C7.81344 13.3027 7.92426 13.376 8.0461 13.4258C8.16794 13.4755 8.2984 13.5008 8.43001 13.5C8.69234 13.4989 8.94374 13.3947 9.13 13.21L14.13 8.21C14.2237 8.11704 14.2981 8.00644 14.3489 7.88458C14.3997 7.76272 14.4258 7.63201 14.4258 7.5C14.4258 7.36799 14.3997 7.23728 14.3489 7.11542C14.2981 6.99356 14.2237 6.88296 14.13 6.79C13.9426 6.60375 13.6892 6.49921 13.425 6.49921C13.1608 6.49921 12.9074 6.60375 12.72 6.79ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
                                            fill="green"/>
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 md:flex md:flex-col items-start gap-5">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 text-nowrap w-32">What's excluded</h3>
                        <div className="flex flex-col space-y-2 pt-1 px-3">
                            {exclusions.map((item, index) => (
                                <div key={index}
                                     className="flex items-center text-gray-700 text-sm sm:text-base gap-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#d06b02" strokeWidth="2" fill="none"/>
                                        <path d="M16 8L8 16M8 8L16 16" stroke="#d06b02" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Map</h3>
                        <img className={''} src={tour.maps} alt=""/>
                    </div>
                </div>
                <div className="z-20 h-fit w-full md:w-1/3 p-4 sm:p-6 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6 sticky top-6 bg-white/45 backdrop-blur-md overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 border-b pb-2">{tour.title}</h2>
                        <p className="text-gray-600 mt-4">{tour.description}</p>

                        <div className="mt-4">
                            <p className="text-gray-500 uppercase text-xs font-semibold">Season</p>
                            <p className="text-lg font-semibold text-gray-900">{tour.season}</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-500 uppercase text-xs font-semibold">Duration</p>
                            <p className="text-lg font-semibold text-gray-900">{tour.duration}</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-500 uppercase text-xs font-semibold">Price per person for tour:</p>
                            <div className="mt-1">
                                <div className="text-[#55c20c] text-xl font-bold">
                                    <div className={'flex justify-between items-center'}>
                                        <span>1 person - {tour.days * 250}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>2 people - {tour.days * 320}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>3 people - {tour.days * 450}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>4 people - {tour.days * 600}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>5+ people - {tour.days * 150}$ per person</span>

                                    </div>
                                </div>
                            </div>
                            <WhatsAppButton title={tour.title}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden">
                <div
                    className="fixed inset-0 -z-10 bg-cover bg-bottom"
                    style={{backgroundImage: `url(${tour.banner})`}}
                ></div>
                <Footer/>
            </div>
        </div>
    )
        ;
};

export default CardDetails;