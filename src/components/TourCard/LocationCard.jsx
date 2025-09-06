import {Link} from 'react-router-dom';
import burana from '../../assets/Burana.jpg';
import IK from '../../assets/issyk kul.jpg';
import AA from '../../assets/Altyn-Arashan-gorge-24.jpg';
import KelSuu from '../../assets/kelsuu2.jpg';
import SonKol from '../../assets/SonKol.jpg';
import KashkaSuu from '../../assets/ksuu.jpg';
import skybridge from '../../assets/оналты.png';
import alarcha from '../../assets/alarcha.jpg';
import sarychelek from '../../assets/онуч.jpeg';
import chonKemin from '../../assets/chonKemin.jpg';
import bishkek from '../../assets/bg2.jpg';
import './TourCard.scss';
import img1 from "../../assets/stoneBurana.jpg";
import img2 from "../../assets/buranabig.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import Header from "../header/Header.jsx";

const LocationCard = () => {
    return (
        <>
            <div className={'flex flex-col items-center pt-10 text-center'}>
                <h3 className={'text-3xl text-white font-extrabold mt-10'}> Best Locations</h3>
                <p className={'text-lg text-white pt-2'}>That will give you the best memories!</p>
            </div>
            <div className={'md:container m-auto md:px-10 flex flex-wrap justify-center gap-5'}>
                <Link state={{Card: "Burana"}}
                      className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                      to={"/LocationDetails"}>
                    <div className={" absolute inset-0 backdrop-blur-3xl rounded-3xl "}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between '}>
                        <div>
                            <div
                                className={'overflow-hidden rounded-xl h-[226px] bg-cover bg-center w-full duration-700'}
                                style={{backgroundImage: `url(${burana})`}} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Burana Tower</h5>
                            <p className={'text-lg text-white'}>Climb the ancient Burana Tower, explore the ruins of a
                                lost city, and uncover the secrets of the Silk Road.</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                            <button
                                className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link state={{Card: "Issyk"}}
                      className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                      to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>


                            <img className={'rounded-xl  h-[226px] w-full'} src={IK} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Issyl Kul Lake</h5>
                            <p className={'text-lg text-white'}>Swim in the crystal-clear waters of Issyk-Kul, relax on
                                golden beaches, and enjoy breathtaking views of the mountains all around</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                            <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link state={{Card: "Altyn"}}
                      className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                      to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>
                            <img className={'rounded-xl  h-[226px] w-full'} src={AA} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Altyn Arashan</h5>
                            <p className={'text-lg text-white'}>Hike through the stunning Altyn Arashan gorge, soak in
                                natural hot springs, and camp under starry mountain skies</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                             <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link state={{Card: "Kelsuu"}}
                      className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                      to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>
                            <img className={'rounded-xl  h-[226px] w-full'} src={KelSuu} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Kel Suu lake</h5>
                            <p className={'text-lg text-white'}>
                                Explore rugged valleys to find Kel Suu Lake, with turquoise waters and peaceful Kyrgyz highlands.</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                             <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link state={{Card: "Sonkol"}}
                      className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                      to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>
                            <img className={'rounded-xl  h-[226px] w-full'} src={SonKol} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Son Kol lake</h5>
                            <p className={'text-lg text-white'}>Discover Son Kul Lake, nestled high in the mountains,
                                surrounded by rolling meadows and peaceful nomadic traditions</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                             <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link state={{Card: "alarcha"}}
                      className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                      to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>
                            <img className={'rounded-xl  h-[226px] w-full'} src={alarcha} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Ala Archa National park</h5>
                            <p className={'text-lg text-white'}>Explore Ala Archa National Park, with its
                                towering peaks, alpine forests, and scenic hiking trails</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                             <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link  state={{Card: "sarychelek"}}
                    className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                    to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>
                            <img className={'rounded-xl  h-[226px] w-full'} src={sarychelek} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Sary Chelek lake</h5>
                            <p className={'text-lg text-white'}>
                                Trek through the lush forests of Sary-Chelek Biosphere Reserve, marvel at the vivid blue lake, and breathe in the serenity of untouched nature.
                            </p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                             <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link  state={{Card: "ChonKemin"}}
                    className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                    to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>
                            <img className={'rounded-xl  h-[226px] w-full'} src={chonKemin} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Chon Kemin valley</h5>
                            <p className={'text-lg text-white'}>Discover the beauty of Chon-Kemin Valley on horseback, ride through lush meadows and mountain trails, experience nomadic culture, and enjoy breathtaking views</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                             <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
                <Link state={{Card: "Bishkek"}}
                       className={'md:w-1/4 mb-5 w-full py-3 rounded-2xl relative border-2 border-transparent hover:border-white transition-all duration-300'}
                       to={"/LocationDetails"}>
                    <div className={"absolute inset-0 backdrop-blur-2xl rounded-2xl"}></div>
                    <div className={'relative h-full z-10 px-4 flex flex-col justify-between'}>
                        <div>


                            <img className={'rounded-xl  h-[226px] w-full'} src={bishkek} alt=""/>

                            <h5 className={'text-lg font-semibold mt-2'}>Bishkek</h5>
                            <p className={'text-lg text-white'}>Stroll through the lively streets of Bishkek, unwind in green parks, and admire the stunning mountains rising just beyond the city skyline.</p>
                        </div>
                        <span className={'font-bold text-2xl'}>
                             <button className="bg-green-600 rounded-2xl text-xs text-white p-2 border-2 border-green-600 transition-all duration-300 ease-in-out hover:border-white hover:scale-105 hover:bg-green-700">
                                        More details ➜
                            </button>
                        </span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default LocationCard;
