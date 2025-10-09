"use client"
import {useGetLocations, useLocations} from "@/stores/locationStore";
import {useEffect} from "react";
import Link from "next/link";

const LocationCard = () => {
    const locations = useLocations()
    const getLocations = useGetLocations()
    useEffect(() => {
        getLocations()
    }, []);
    return (
        <>
            <div className={'flex flex-col items-center pt-10 text-center'}>
                <h3 className={'text-3xl text-white font-extrabold mt-10'}> Best Locations</h3>
                <p className={'text-lg text-white pt-2'}>That will give you the best memories!</p>
            </div>
            <div className={'md:container m-auto px-5 md:px-10 flex flex-wrap justify-center gap-5'}>
                {locations.map((location) => (
                    <Link key={location.id}
                        className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                        href={`/location/${location.id}`}>
                        <div className={" absolute inset-0 backdrop-blur-3xl rounded-3xl "}></div>
                        <div className={'relative h-full z-10 px-4 flex flex-col justify-between '}>
                            <div>
                                <div
                                    className={'overflow-hidden rounded-xl h-[226px] bg-cover bg-center w-full duration-700'}
                                    style={{backgroundImage: `url(${location.main_photo})`}} alt=""/>

                                <h5 className={'text-lg font-semibold mt-2 text-[#ff1414]'}>{location.title}</h5>
                                <p className={'text-lg text-white'}>{location.text.split(" ").slice(0, 18).join(" ")}</p>
                            </div>
                            <span className={'font-bold text-2xl'}>
                            <button
                                className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                More details ➜
                            </button>
                        </span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default LocationCard;
