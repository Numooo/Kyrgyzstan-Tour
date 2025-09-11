import cls from "./footer.module.scss"
import Facebook from './../../assets/facebook-svgrepo-com.svg'
import Linkedin from './../../assets/instagram-svgrepo-com.svg'
import Whatsapp from './../../assets/whatsapp-svgrepo-com.svg'
import {Link} from "react-router-dom";
import { forwardRef } from "React"

const Footer = forwardRef((props, ref) => {
    return (
        <div className="relative text-white py-16" ref={ref}>
            <div className={"absolute inset-0 backdrop-blur-md"}></div>
            <div className="md:px-20 z-10 relative px-10">
                <div className={"flex md:flex-row gap-10 md:gap-0 flex-col justify-around"}>
                    <div className={"md:w-1/4"}>
                        <a href="#" className={'text-3xl font-bold'}>
                            Kyrgyzstan.Tour
                        </a>
                        <div className={"pt-2 md:pt-6"}>
                            <p>
                                Explore Kyrgyzstan — a land of mountains, lakes, and nomadic traditions.
                                At Kyrgyzstan.Tour, we offer unforgettable journeys for adventurers, culture lovers, and nature seekers.
                            </p>
                        </div>
                        <div className={"pt-2 md:pt-6"}>
                            <p>
                                Kyrgyzstan, 2025
                            </p>
                        </div>
                    </div>
                    <div className={cls.logo}>
                        <div className={cls.col}>
                            <h2 className={"font-bold text-xl"}>
                                Contacts
                            </h2>
                            <a target={"_blank"} href="https://maps.app.goo.gl/d7JEwHSJA8wpkYVr9">
                                <p className={"pt-2 md:pt-6"}>
                                    Kyrgyzstan, <span>Bishkek</span>
                                </p>
                            </a>


                            <a target={"_blank"} href="https://wa.me/+996700057879">
                                <p>
                                    Phone: <span>+996 (700) 05 78 79</span>
                                </p>
                            </a>

                            <a target={"_blank"} href={'https://www.instagram.com/kyrgyzstan.tour?igsh=cnhvdGx5OHUzaWo1&utm_source=qr'}>
                                <p>
                                    Instagram: <span>kyrgyzstan.tour</span>
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className={cls.logo}>
                        <h2 className={"font-bold text-xl"}>
                            Our social cites
                        </h2>
                        <div className={'flex gap-2 pt-2 md:pt-6'}>
                            <a target={"_blank"} href="">
                                <img className={'w-8 h-8'} src={Facebook} alt=""/>
                            </a>
                            <a target={"_blank"} href="https://www.instagram.com/kyrgyzstan.tour?igsh=cnhvdGx5OHUzaWo1&utm_source=qr">
                                <img className={'w-8 h-8'} src={Linkedin} alt=""/>
                            </a>
                            <a target={"_blank"} href="https://wa.me/+996700057879">
                                <img className={'w-8 h-8'} src={Whatsapp} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className={cls.logo}>
                        <div className={'flex flex-col'}>
                            <h2 className={"font-bold text-xl"}>
                                Navigation
                            </h2>
                            <Link to={'/Tour/'} className={"pt-2 md:pt-6"}>
                                Group tours
                            </Link>
                            <Link to={'/Tour/'}>
                                Individual tours
                            </Link>
                            <Link to={'/locations/'}>
                                Author's tours
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Footer;