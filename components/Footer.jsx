import React from "react";

const Footer = () => {
    return (
        <div id={"footer"} className="relative text-white py-16">
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
                    <div>
                        <div>
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
                    <div>
                        <h2 className={"font-bold text-xl"}>
                            Our social cites
                        </h2>
                        <div className={'flex gap-2 pt-2 md:pt-6'}>
                            <a target={"_blank"} href="">
                                <img className={'w-8 h-8'} src={"/assets/facebook-svgrepo-com.svg"} alt=""/>
                            </a>
                            <a target={"_blank"} href="https://www.instagram.com/kyrgyzstan.tour?igsh=cnhvdGx5OHUzaWo1&utm_source=qr">
                                <img className={'w-8 h-8'} src={"/assets/instagram-svgrepo-com.svg"} alt=""/>
                            </a>
                            <a target={"_blank"} href="https://wa.me/+996700057879">
                                <img className={'w-8 h-8'} src={"/assets/whatsapp-svgrepo-com.svg"} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className={'flex flex-col'}>
                            <h2 className={"font-bold text-xl"}>
                                Navigation
                            </h2>
                            <a href={'/Tour/'} className={"pt-2 md:pt-6"}>
                                Group tours
                            </a>
                            <a href={'/Tour/'}>
                                Individual tours
                            </a>
                            <a href={'/location/'}>
                                Author's tours
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;