import img from '../../assets/photo_2025-07-02_23-13-46.jpg'
import img2 from '../../assets/photo_2025-07-02_23-13-52.jpg'
import img3 from '../../assets/photo_2025-07-02_23-13-58.jpg'
import img4 from '../../assets/bus.jpg'
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import bg from "../../assets/bg_auto2.jpg"


const AutoPark = () => {
    const cars = [
        {
            id: 1,
            title: "Toyota Sequoia",
            engine: "4.7 L",
            places: "7 seats",
            year: "2021",
            type: "4WD",
            image: img,
        },
        {
            id: 3,
            title: "Toyota 4Runner TRD PRO",
            engine: "4.0 L",
            places: "4 seats",
            year: "2020",
            type: "4WD",
            image: img3,
        },
        {
            id: 2,
            title: "Toyota Sequoia",
            engine: "4.7 L",
            places: "7 seats",
            year: "2022",
            type: "4WD",
            image: img2,
        },
        {
            id: 4,
            title: "Mercedes Sprinter",
            engine: "2.2 L",
            places: "12 seats",
            year: "2019",
            type: "4WD",
            image: img4,
        },
    ];


    return (
        <div className="relative overflow-hidden">
            <div
                className="fixed inset-0 -z-10 bg-cover bg-center"
                style={{backgroundImage: `url(${bg})`}}
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
    )
        ;
};

export default AutoPark;
