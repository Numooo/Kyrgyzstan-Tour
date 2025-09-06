import React, { useEffect, useState } from 'react';
import brand from '../assets/finalVid.mp4'

const PageLoader = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div className={" bg-black h-screen flex justify-center items-center"}>
                    <video className={"size-[1700px]"}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={brand} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default PageLoader;
