import {motion} from "framer-motion";

const WhatsAppButton = ({title}) => {
    return (
        <motion.button
            whileHover={{scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 255, 100, 0.5)"}}
            whileTap={{scale: 0.95}}
            transition={{type: "spring", stiffness: 300}}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded-md font-semibold"
            onClick={() => {
                const phone = "996700057879";
                const message = `Hi, I want to reserve this tour: ${title}`;
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            }}
        >
            Book
        </motion.button>
    );
};

export default WhatsAppButton;