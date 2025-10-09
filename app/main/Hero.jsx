import Header from "@/components/Header";
import Link from "next/link";

const Hero = () => {
    return (
        <div className={'text-white px-5 md:px-0'}>
            <Header svgColor="#fff" />
            <div className={"flex flex-col items-center gap-8 md:my-48 my-16"}>
                <div className={'flex flex-col gap-5 items-center'}>
                    <h1 className={'tracking-wide text-center text-4xl md:text-5xl font-semibold'}>Author's tours throughout Kyrgyzstan</h1>
                    <p className={'md:w-2/5 text-center'}>Book tours and discover Kyrgyzstan from new sides!
                        Unique routes, cultural immersion, exciting adventures in the mountains and steppes in all the
                        regions!</p>
                </div>
                <div className="buttons flex flex-wrap justify-center gap-5">
                    <Link href="/locations">
                        <button className="min-w-[200px] cursor-pointer py-3 px-6 text-white rounded-xl font-bold border-2 border-white bg-red-700 hover:bg-red-900 hover:text-gray-900 hover:shadow-lg transition-all duration-300 text-center">
                            Create a trip
                        </button>
                    </Link>
                    <Link href="/tour">
                        <button className="min-w-[200px] cursor-pointer py-3 px-6 text-white rounded-xl font-bold border-2 border-white bg-red-700 hover:bg-red-900 hover:text-gray-900 hover:shadow-lg transition-all duration-300 text-center">
                            Tours
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;