import Hero from "./components/Hero/Hero.jsx";
import TopSlider from "./components/TopSlider/TopSlider.jsx";
import LocationCard from "./components/TourCard/LocationCard.jsx";
import Footer from "./components/footer/Footer.jsx";
import {Route, Routes, useLocation} from 'react-router-dom';
import Locations from "./components/Locations/Locations.jsx";
import TourDetails from "./components/TourDetails/TourDetails.jsx";
import Tours from "./components/TourDetails/Tours.jsx";
import LocationDetails from "./components/LocationDetail/LocationDetails.jsx";
import AutoPark from "./components/autopark/AutoPark.jsx";
import {useEffect, useRef} from "react";

const App = () => {
    const footerRef = useRef(null);
    const galleryRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        if (location.hash === "#gallery" && galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#footer" && footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={
                <div className={'main relative bg-fixed bg-cover bg-center'}>
                    <div className={'absolute inset-0 bg-black/50'}></div>
                    <div className={'relative z-10'}>
                        <Hero/>
                        <LocationCard/>
                        <TopSlider ref={galleryRef} />
                        <Footer ref={footerRef} />
                    </div>
                </div>
            } />
            <Route path="/autopark/" element={<AutoPark />} />
            <Route path="/locations/" element={<Locations />} />
            <Route path="/LocationDetails/" element={<LocationDetails />} />
            <Route path="/TourDetails/" element={<TourDetails />} />
            <Route path="/Tour/" element={<Tours />} />
        </Routes>
    );
};

export default App;