"use client";

import {Suspense} from "react";
import Footer from "@/components/Footer";
import Hero from "@/app/main/Hero";
import LocationCard from "@/app/main/LocationCard";
import TopSlider from "@/app/main/TopSlider";

function PageContent() {


    return (
        <div className="relative overflow-hidden">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{backgroundImage: `url(/assets/Airbrush-Image-Enhancer.jpeg)`}}
            />
            <div className="absolute inset-0 bg-black/50"/>
            <div className="relative z-10">
                <Hero/>
                <LocationCard/>
                <TopSlider/>
                <Footer/>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent/>
        </Suspense>
    );
}
