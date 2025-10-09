"use client"
import React, {useEffect} from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useCars, useGetCars} from "@/stores/carStore";

const Page = () => {
    const getCars = useGetCars();
    const cars = useCars();

    useEffect(() => {
        getCars()
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{backgroundImage: `url(/assets/bg_auto2.jpg)`}}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
                <Header/>
                <div className={'md:container m-auto px-10 md:px-0 flex md:py-10 flex-wrap justify-center gap-10'}>

                    {cars.map((car) => (
                        <div key={car.id}
                             className="relative w-full md:w-[40%] md:h-[390px] overflow-hidden rounded-xl shadow-lg transform transition duration-500 group">
                            <img
                                src={car.image}
                                alt={car.title}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div
                                className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/70 to-transparent z-10"/>
                            <div
                                className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"/>

                            <div className="absolute top-0 left-0 p-4 text-white flex justify-between w-full z-20">
                                <div>
                                    <p className="text-xl font-semibold">{car.title}</p>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                <div className="flex justify-between">
                                    <p>{car.engine}</p>
                                    <p>{car.places}</p>
                                    <p>{car.year}</p>
                                    <p>{car.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Page;