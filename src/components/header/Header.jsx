import {Link} from "react-router-dom";
import {useState} from "react";
const Header = () => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow((prev) => !prev);

    return (
        <header className={'flex md:flex-row flex-col justify-around items-center py-8 text-white'}>
            <div className={'flex items-center gap-3'}>
                <button className={'md:pointer-events-none'} onClick={toggleMenu}>
                    {show ? (
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 6L18 18M6 18L18 6"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <img className={'border-2 bg-gray-300 border-gray-500 md:border-none md:shadow-none rounded-xl shadow-md w-9 h-9'} src="/logo.png" alt=""/>
                    )}
                </button>
                <a href="/" className={'md:text-4xl text-3xl font-bold'}>
                    Kyrgyzstan.Tour
                </a>
            </div>
            <nav className={'md:flex hidden gap-10'}>
                <Link to={"/#footer"}>About Us</Link>
                <Link to={"/#gallery"}>Gallery</Link>
                <Link to="/autopark/">Our Cars</Link>
                <Link to={"/#footer"}>Contacts</Link>
            </nav>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden 
          ${show ? "max-h-[300px] py-1" : "max-h-0 py-0"}
        `}
            >
                <nav className="flex flex-col items-center gap-2 text-white text-lg font-medium">
                    <Link onClick={toggleMenu} to={"/#footer"}>About Us</Link>
                    <Link onClick={toggleMenu} to={"/#gallery"}>Gallery</Link>
                    <Link onClick={toggleMenu} to="/autopark/">Our Cars</Link>
                    <Link onClick={toggleMenu} to={"/#footer"}>Contacts</Link>
                </nav>
            </div>
        </header>

    );
};

export default Header;
