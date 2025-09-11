import React, {useEffect, useState} from 'react';
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import man from "../../assets/brand.png";
import bg from "../../assets/ikback2.jpg";
import buranabg from '../../assets/Burana.jpg';
import karakolbg from '../../assets/karakolbg.webp';
import kelsuubg from '../../assets/kelsuubg.webp';
import {useLocation} from "react-router-dom";
import alarchamain from "../../assets/alarchamain.jpg";
import day1tour from "../../assets/1daytour.png";
import days2tour from "../../assets/days2tour.png";
import days3tour from "../../assets/days3tour.png";
import days1bg from "../../assets/bishmain1.jpg";
import {motion} from "framer-motion";
import twodays1 from '../../assets/ala-archa.jpg';
import twodays2 from '../../assets/оналты.png';
import twodays3 from '../../assets/img7.jpg';
import twodays4 from '../../assets/chkmbg2.webp';
import twodays5 from '../../assets/kokmoinok.jpg';
import threedays1 from '../../assets/kashkasuu.jpg';
import threedays2 from '../../assets/ik2.jpg';
import threedays3 from '../../assets/ik6.jpg';
import threedays4 from '../../assets/ik5.jpg';
import karakolday1 from '../../assets/karakolday1.jpg'
import karakolday2 from '../../assets/AAbg.webp'
import karakolday3 from '../../assets/karakolday3.webp'
import kartakarakol from '../../assets/karta_karakol.jpg';
import kartakelsuu from '../../assets/karta_kelsuu.png';
import kelsuuday1 from '../../assets/bishmain1.jpg';
import kelsuuday2 from '../../assets/kelsuuday2.jpg';
import kelsuuday3 from '../../assets/kelsuuday3.jpg';
import kelsuuday4 from '../../assets/kelsuuMain.jpg';
import kelsuuday5 from '../../assets/kelsuuday5.jpg';
import sonkulday1 from '../../assets/bishmain1.jpg';
import sonkulday2 from '../../assets/sonkolday3.jpg';
import sonkulday3 from '../../assets/sonkolimg4.jpg';
import sonkulday4 from '../../assets/sonkolimg7.webp';
import sonkulday5 from '../../assets/kelsuuday5.jpg';
import sonkulbg from '../../assets/sonkolimg6.webp';
import kartasonkul from '../../assets/kartasonkol.jpg';
import kashkasuubg from '../../assets/bgkashkasuu.jpg';
import kartakashkasuu from '../../assets/kartakashkasuu.jpg';
import kashkasuuday1 from '../../assets/kashkasuu.jpg';
import kartachun from '../../assets/kartachun.jpg';
import chunkurchakSkyBridgeImg from '../../assets/chunkurchakday1.jpg';
import panoramicCafeImg from '../../assets/chunkurchakday2.jpg';
import days4bg from '../../assets/issyk kul.jpg';
import fourdays1 from '../../assets/alarcha.jpg';
import fourdays2 from '../../assets/chunkurchakday1.jpg';
import fourdays3 from '../../assets/chkmbg.jpg';
import fourdays4 from '../../assets/chkmimg4.jpg';
import fourdays5 from '../../assets/беш.jpg';
import fourdays6 from '../../assets/ik8.jpg';
import fourdays7 from '../../assets/AAbg2.jpg';
import days4karta from '../../assets/karta4day.png'
import days5bg from '../../assets/kelsuuday3.jpg';
import fivedays2 from '../../assets/chunkurchakday1.jpg';
import fivedays1 from '../../assets/alarchaimg1.jpg';
import fivedays3 from '../../assets/chkmbg2.webp';
import fivedays4 from '../../assets/ik7.jpg';
import fivedays5 from '../../assets/ik5.jpg';
import fivedays6 from '../../assets/chkm1.jpg';
import fivedays7 from '../../assets/kokmoinok.jpg';
import fivedays8 from '../../assets/bgburana.jpg';
import fivedays9 from '../../assets/bgbishkek.jpg';
import days5karta from '../../assets/karta5day.png';
import days6bg from '../../assets/sonkolimg2.webp';
import sixdays1 from '../../assets/chunkurchakday1.jpg';
import sixdays2 from '../../assets/img7.jpg';
import sixdays3 from '../../assets/chonKemin.jpg';
import sixdays4 from '../../assets/bg_auto.jpg';
import sixdays5 from '../../assets/онбеш.jpg';
import sixdays6 from '../../assets/jetioguz.jpg';
import sixdays7 from '../../assets/Airbrush-Image-Enhancer.jpeg';
import sixdays8 from '../../assets/AAbg4.jpg';
import sixdays9 from '../../assets/karakolbg.webp';
import sixdays10 from '../../assets/first_back.jpg';
import sixdays11 from '../../assets/ik2.jpg';
import sixdays12 from '../../assets/bishimg3.webp';
import karta6days from '../../assets/karta6days.png';
import days7bg from '../../assets/karakolbg.webp';
import sevendays1 from '../../assets/chunkurchakday1.jpg';
import sevendays2 from '../../assets/bgbishkek.jpg';
import sevendays3 from '../../assets/bgburana.jpg';
import sevendays4 from '../../assets/chkmimg7.jpg';
import sevendays5 from '../../assets/horserideAA.webp';
import sevendays6 from '../../assets/ik1.jpg';
import sevendays7 from '../../assets/jetioguz.jpg';
import sevendays8 from '../../assets/AAbg.webp';
import sevendays9 from '../../assets/karakolday3.webp';
import sevendays10 from '../../assets/first_back.jpg';
import sevendays11 from '../../assets/ik2.jpg';
import sevendays12 from '../../assets/bishimg3.webp';
import days8bg from '../../assets/fives.jpg';
import karta8days from '../../assets/karta8days.png';
import eightdays1 from '../../assets/bgbishkek.jpg';
import eightdays2 from '../../assets/alarcha.jpg';
import eightdays3 from '../../assets/chunkurchakday1.jpg';
import eightdays4 from '../../assets/img7.jpg';
import eightdays5 from '../../assets/chkmbg.jpg';
import eightdays6 from '../../assets/chkmimg4.jpg';
import eightdays7 from '../../assets/kelsuuday3.jpg';
import eightdays8 from '../../assets/ik8.jpg';
import eightdays9 from '../../assets/karakolday1.jpg';
import eightdays10 from '../../assets/AAmain2.jpg';
import eightdays11 from '../../assets/chkmimg3.webp';
import eightdays12 from '../../assets/chonKemin.jpg';
import eightdays13 from '../../assets/ik2.jpg';
import eightdays14 from '../../assets/first_back.jpg';
import days9bg from '../../assets/karakolbg.webp';
import ninedays1 from '../../assets/bishimg2.jpg';
import ninedays2 from '../../assets/alarchaimg2.jpg';
import ninedays3 from '../../assets/chunkurchakday1.jpg';
import ninedays4 from '../../assets/bgburana.jpg';
import ninedays5 from '../../assets/chkmbg.jpg';
import ninedays6 from '../../assets/chkmimg6.jpg'
import ninedays7 from '../../assets/chonKemin.jpg';
import ninedays8 from '../../assets/ik1.jpg';
import ninedays9 from '../../assets/issyk kul.jpg';
import ninedays10 from '../../assets/kelsuuday3.jpg';
import ninedays11 from '../../assets/jetioguz.jpg';
import ninedays12 from '../../assets/karakolday3.webp';
import ninedays13 from '../../assets/AAbg2.jpg';
import ninedays14 from '../../assets/chkmimg3.webp';
import ninedays15 from '../../assets/image.png';
import ninedays16 from '../../assets/first_back.jpg';
import ninedays17 from '../../assets/kashkasuu.jpg';
import ninedays18 from '../../assets/bgbishkek.jpg';
import karta9days from '../../assets/karta9days.png';
import WhatsAppButton from "./WhatsAppButton.jsx";

const Park = {
    days: 1,
    get title() {
        return `Tour around Bishkek city. ${this.days} day`;
    },
    description: "Discover the breathtaking beauty of Ala-Archa National Park with its alpine meadows, snow-capped peaks, and scenic hiking trails just outside of Bishkek",
    banner: `${days1bg}`,
    season: "Summer / Winter / Spring / Autumn",
    duration: "1 full fay",
    maps: `${day1tour}`,
    itineraries: [
        {
            id: 1,
            title: "",
            image: [`${alarchamain}`],
            description: "Start your day with an easy walk in Ala-Archa National Park, enjoying stunning views of the Kashka Suu Gorge. Explore the Panorama Trail and take a cable car ride up to the ski base, where breathtaking mountain vistas await. Then, head to the famous Sky Bridge in Chunkurchak — a suspension bridge over a picturesque gorge that offers unforgettable experiences and amazing photo opportunities. This route is perfect for those wanting to experience Kyrgyzstan’s natural beauty and enjoy an active yet relaxed day outdoors.",
        },
    ]
};
const Burana = {
    days: 2,
    get title() {
        return `Burana Adventure Tour in ${this.days} days`;
    },
    description: "Explore the ancient Burana Tower and its historical surroundings, hike through the breathtaking Ala-Archa National Park, ride horses across the scenic Chon Kemin Valley, and marvel at the dramatic landscapes of Kok Moinok Canyon",
    banner: `${buranabg}`,
    season: "Summer, Winter",
    duration: "2 days | 1 night",
    maps: `${days2tour}`,
    itineraries: [
        {
            id: 1,
            title: "Arrival in Bishkek & move to National Park 'Ala-Archa'",
            image: [`${twodays1}`, `${twodays2}`],
            description: "Welcome to Bishkek! Enjoy a city tour, and departure to Ala-Archa National Park. After visit Chunkurchak gorge, and enjoy an amazing view in Sky-Bridge",
        },
        {
            id: 2,
            title: "Drive to Burana tower, stop in Chon Kemin valley, visit Kok Moinok canyon and return to Bishkek city",
            image: [`${twodays3}`, `${twodays4}`, `${twodays5}`],
            description: "Start your day with a drive to the Burana Tower, an ancient minaret dating back to the 11th century. Explore the ruins of the old city of Balasagun, once a key stop along the Great Silk Road. Wander among the stone petroglyphs and balbals (ancient Turkic grave markers), and enjoy panoramic views from the top of the tower.\n" +
                "\n" +
                "Continue the journey toward the stunning Chon-Kemin Valley, known for its lush meadows, snow-capped peaks, and traditional Kyrgyz villages. Take a peaceful walk or an optional horseback ride through the valley, where you can experience authentic rural life and breathtaking mountain scenery.\n" +
                "\n" +
                "After a scenic lunch stop, head to the lesser-known but mesmerizing Kok-Moynok Canyon, often referred to as Kyrgyzstan's \"Mars Canyon\" due to its red, layered rock formations. Hike through its winding trails and marvel at the surreal, almost otherworldly landscapes.\n" +
                "\n" +
                "In the evening, return to Bishkek, filled with unforgettable impressions of nature, history, and adventure — all in 2 days.",
        },
    ],
    inclusions: [
        {item: "Transportation"},
        {item: "Accommodation"},
        {item: "Guide"},
        {item: "Entrance Fees"},
        {item: "Breakfast"},
        {item: "Meals not listed"},
    ],
    exclusions: [
        {item: "Personal expenses"},
        {item: "Insurance"},
    ],
};
const IssykKul = {
    days: 3,
    get title() {
        return `Issyk-Kul with horse riding tour in ${this.days} days`;
    },
    description: "Embark on an unforgettable journey through the breathtaking landscapes and rich heritage of Kyrgyzstan. Begin at the crystal-clear Issyk-Kul Lake, the \"pearl of Central Asia,\" where majestic mountains meet turquoise waters. Explore the cultural charm of Cholpon-Ata, home to ancient petroglyphs and the open-air Ruh Ordo cultural complex.\n" +
        "\n" +
        "Step back in time at the historic Burana Tower, a remnant of the ancient Silk Road city of Balasagun, surrounded by mysterious stone balbals. Breathe in fresh alpine air at Ala-Archa National Park, a mountain paradise just a short drive from the capital.\n" +
        "\n" +
        "Venture into the serene beauty of Kashka-Suu and Chunkurchak gorges, where rolling green hills and dramatic cliffs invite you to reconnect with nature. Experience the unspoiled tranquility of Chon-Kemin Valley, a land of sweeping pastures, traditional villages, and awe-inspiring mountain views.\n" +
        "\n" +
        "This adventure seamlessly blends history, culture, and nature — a perfect escape into the soul of Kyrgyzstan.",
    banner: `${bg}`,
    season: "Summer/Winter",
    duration: "3 days | 2 nights",
    maps: `${days3tour}`,
    itineraries: [
        {
            id: 1,
            title: "Meeting, departure to Kashka Suu gorge to the Cable Cars. Visit to Ala-Archa National Park, departure to the Sky Bridge.",
            image: [`${threedays1}`, `${twodays2}`, `${alarchamain}`,],
            description: "The tour begins with a meeting in Bishkek and a drive to the beautiful Kashka-Suu Gorge. There, guests take a scenic cable car ride with panoramic mountain views.\n" +
                "\n" +
                "Next, the journey continues to Ala-Archa National Park, where visitors enjoy a short walk surrounded by alpine landscapes, rivers, and pine forests.\n" +
                "\n" +
                "The final stop is the Sky Bridge — a thrilling suspension bridge with stunning views of the gorge. Afterward, the group returns to Bishkek filled with fresh impressions and memories of Kyrgyzstan’s mountain beauty.",
        },
        {
            id: 2,
            title: "Drive to Tokmok city. Stop in Burana Tower. Departure to Chon Kemin valley. Horse Riding tour. ",
            image: [`${twodays3}`, `${twodays4}`,],
            description: "The tour continues with a drive to Tokmok city and a visit to the historic Burana Tower, an ancient minaret from the 11th century. After exploring the site and its open-air museum, the journey goes on to the scenic Chon-Kemin Valley. Surrounded by mountains and forests, guests enjoy a peaceful horse riding tour through the valley before settling in for the evening.",
        },
        {
            id: 3,
            title: "Drive to Issyk Kul Region. Departure to Cholpon Ata city. Spending time near of Issyk Kul lake. Visit 'Rukh Ordo' Culture center",
            image: [`${threedays2}`, `${threedays3}`, `${threedays4}`],
            description: "The final day of the tour begins with a drive to the Issyk-Kul Region, followed by a visit to Cholpon-Ata city. Guests enjoy free time by the shores of the beautiful Issyk-Kul Lake — perfect for relaxing, walking, or swimming. A visit to the Rukh Ordo Cultural Center offers a unique cultural experience, combining history, spirituality, and art in a scenic open-air setting. In the evening, the group gathers for a farewell dinner to celebrate the journey and share final memories before returning to Bishkek.",
        },
    ]
};
const Karakol = {
    days: 5,
    get title() {
        return `Karakol Adventure Tour. ${this.days} days`;
    },
    description: "Embark on an unforgettable journey through Issyk-Kul’s stunning nature — from alpine lakes and snowy peaks to rich local culture and warm hospitality.",
    banner: `${karakolbg}`,
    season: "Summer",
    duration: "5 days | 4 nights",
    maps: `${kartakarakol}`,
    itineraries: [
        {
            id: 1,
            title: "Karakol",
            image: [`${karakolday1}`],
            description: "Discover Karakol’s charm with a city tour through Ala-Too Square, bustling bazaars, and rich cultural sights.",
        },
        {
            id: 2,
            title: "Altyn Arashan",
            image: [`${karakolday2}`],
            description: "Unwind in Altyn Arashan’s stunning valley, soak in hot springs, and take in panoramic views of the mountains.",
        },
        {
            id: 3,
            title: "Ak-Suu",
            image: [`${karakolday3}`],
            description: "Wander through the surreal landscapes of Skazka Canyon and marvel at the cascading Barskoon waterfalls.",
        }
    ]
};
const kelsuu = {
    days: 5,
    get title() {
        return `Kel-Suu Adventure Tour. ${this.days} days`;
    },
    description: "Discover the hidden gem of Kel-Suu — a remote alpine lake surrounded by dramatic cliffs, wild landscapes, and unforgettable adventures.",
    banner: `${kelsuubg}`,
    season: "Summer",
    duration: "5 days | 4 nights",
    maps: `${kartakelsuu}`,
    itineraries: [
        {
            id: 1,
            title: "Arrival in Bishkek & City Tour",
            image: [`${kelsuuday1}`],
            description: "Welcome to Bishkek! Take a walk through Ala-Too Square, explore Osh Bazaar, and get a feel for Kyrgyz culture.",
        },
        {
            id: 2,
            title: "Drive to Naryn",
            image: [`${kelsuuday2}`],
            description: "Travel through mountain passes to the town of Naryn — a peaceful gateway to southern Kyrgyzstan’s wilderness.",
        },
        {
            id: 3,
            title: "Journey to Ak-Sai Valley",
            image: [`${kelsuuday3}`],
            description: "Discover the untouched beauty of the Ak-Sai Valley — vast alpine meadows, rugged terrain, and nomadic camps.",
        },
        {
            id: 4,
            title: "Kel-Suu Lake Expedition",
            image: [`${kelsuuday4}`],
            description: "Venture deep into the mountains to see the breathtaking Kel-Suu Lake — a hidden turquoise gem among towering cliffs.",
        },
        {
            id: 5,
            title: "Return to Bishkek & Departure",
            image: [`${kelsuuday5}`],
            description: "Head back to Bishkek through scenic landscapes, shop for souvenirs, and prepare for your departure.",
        }
    ]
};
const sonkul = {
    days: 5,
    get title() {
        return `Son-Kul Nomad Tour. ${this.days} days`;
    },
    description: "Experience the serene beauty of Son-Kul — a high-altitude lake surrounded by endless pastures, yurts, and the spirit of nomadic life.",
    banner: `${sonkulbg}`,
    season: "Summer",
    duration: "5 days | 4 nights",
    maps: `${kartasonkul}`,
    itineraries: [
        {
            id: 1,
            title: "Arrival in Bishkek & City Tour",
            image: [`${sonkulday1}`],
            description: "Arrive in Bishkek and explore the city’s highlights including Ala-Too Square, the White House, and local bazaars.",
        },
        {
            id: 2,
            title: "Drive to Kyzart Village",
            image: [`${sonkulday2}`],
            description: "Head south through scenic mountain roads to the quiet village of Kyzart — your gateway to Son-Kul.",
        },
        {
            id: 3,
            title: "Cross Kyzart Pass to Son-Kul Lake",
            image: [`${sonkulday3}`],
            description: "Trek or ride horseback over the Kyzart Pass and arrive at the stunning shores of Son-Kul Lake.",
        },
        {
            id: 4,
            title: "Yurt Stay & Nomadic Experience",
            image: [`${sonkulday4}`],
            description: "Spend the day living like a nomad — ride horses, watch eagle hunters, and relax in a traditional yurt camp under the stars.",
        },
        {
            id: 5,
            title: "Return to Bishkek & Departure",
            image: [`${sonkulday5}`],
            description: "Say goodbye to the peaceful lake and return to Bishkek through mountain valleys. Final shopping before departure.",
        }
    ]
};
const KashkaSuu = {
    days: 1,
    get title() {
        return `Tour around Bishkek city. ${this.days} day`;
    },
    description: "Explore the natural charm of Kashka Suu and the legendary 'ZiL' Ski Base — where lush alpine meadows meet snow-covered peaks. Just a short drive from Bishkek, this destination offers year-round adventures with scenic trails, panoramic views, and thrilling cable car rides.",
    banner: `${kashkasuubg}`,
    season: "Summer / Winter / Spring / Autumn",
    duration: "1 full fay",
    maps: `${kartakashkasuu}`,
    itineraries: [
        {
            id: 1,
            title: "",
            image: [`${kashkasuuday1}`],
            description: "Begin your day with a scenic walk through Kashka Suu National Park, taking in sweeping views of the gorge. Ride the cable car up to the 'ZiL' ski base for unforgettable mountain panoramas, then visit the iconic Sky Bridge in Chunkurchak — a thrilling suspension bridge with stunning photo spots. A perfect day trip for nature lovers and adventure seekers alike.",
        },
    ]
};
const Chun = {
    days: 2,
    get title() {
        return `Tour around Bishkek city. ${this.days} days`;
    },
    description: "Discover the breathtaking beauty of Ala-Archa National Park with its alpine meadows, snow-capped peaks, and scenic hiking trails just outside of Bishkek",
    banner: `${days1bg}`,
    season: "Summer / Winter / Spring / Autumn",
    duration: "2 full fay",
    maps: `${kartachun}`,
    itineraries: [
        {
            id: 1,
            title: "Chunkurchak Sky Bridge",
            image: [`${chunkurchakSkyBridgeImg}`],
            description:
                "Visit the breathtaking Sky Bridge in Chunkurchak — a suspension bridge stretched across a scenic mountain gorge. Enjoy panoramic views, the thrill of walking above the valley, and perfect spots for unforgettable photos. A must-see stop for nature lovers and adventure seekers.",
        },
        {
            id: 2,
            title: "Panoramic Café with a View",
            image: [`${panoramicCafeImg}`],
            description:
                "Relax at a cozy panoramic café overlooking the majestic mountains. Enjoy a warm drink or local cuisine while soaking in stunning views of the surrounding valley. A perfect place to unwind and appreciate Kyrgyzstan’s natural beauty at a slower pace.",
        },
    ]
};
const Zheti = {
    days: 4,
    get title() {
        return `Kyrgyzstan Adventure Tour. ${this.days} Days`;
    },
    description: "Explore the natural wonders of Kyrgyzstan: Ala Archa, Chunkurchak, Chon Kemin, Issyk-Kul, Fairy Tale Canyon, Barskoon, Jeti-Oguz, and Altyn-Arashan. Experience horseback riding, eagle shows, thermal springs, and authentic Kyrgyz hospitality.",
    banner: `${days4bg}`,
    season: "Summer / Spring / Autumn / Winter",
    duration: "4 full days",
    maps: `${days4karta}`,
    itineraries: [
        {
            id: 1,
            day: "Day 1",
            image: [`${fourdays1}`, `${fourdays2}`],
            title: "Arrival & Mountain Adventures",
            description: "Meeting at Manas International Airport, breakfast, visit Ala Archa National Park, lunch, explore Chunkurchak Gorge and Sky Bridge, dinner, hotel accommodation."
        },
        {
            id: 2,
            day: "Day 2",
            image: [`${fourdays3}`, `${fourdays4}`],
            title: "Chon Kemin & Issyk-Kul Lake",
            description: "Breakfast, departure to Chon Kemin Gorge, traditional lunch «Apamdyn kattamasi», 1-hour horse riding, Boomsky Gorge, Issyk-Kul Lake, accommodation in a yurt town, dinner."
        },
        {
            id: 3,
            day: "Day 3",
            image: [`${fourdays5}`, `${fourdays6}`],
            title: "Fairy Tale Canyon & Jeti-Oguz",
            description: "Breakfast, visit Fairy Tale Canyon, national show program, golden eagle show, archery, Barskoon Gorge, lunch, Jeti-Oguz Gorge, dinner, hotel accommodation."
        },
        {
            id: 4,
            day: "Day 4",
            image: [`${fourdays7}`],
            title: "Altyn-Arashan & Farewell",
            description: "Breakfast, trip to Altyn-Arashan, thermal spring bathing, picnic in the mountains, return to Bishkek, farewell dinner, transfer to Manas Airport."
        }
    ]
};
const fiveDayTour = {
    days: 5,
    get title() {
        return `Kyrgyzstan Discovery Tour. ${this.days} Days`;
    },
    description: "A 5-day journey through Kyrgyzstan’s most iconic destinations: Chunkurchak Gorge, Chon Kemin, Issyk-Kul Lake, Rukh Ordo Ethno Complex, Kok Moynok Canyon, Burana Tower, and Bishkek. Enjoy horseback riding, boat trips, cultural experiences, and authentic cuisine.",
    banner: `${days5bg}`,
    season: "Summer / Spring / Autumn",
    duration: "5 full days",
    maps: `${days5karta}`,
    itineraries: [
        {
            id: 1,
            day: "Day 1",
            image: [`${fivedays1}`, `${fivedays2}`],
            title: "Arrival & Chunkurchak Gorge",
            description: "Meeting at Manas Airport, meals depending on arrival time, departure to Chunkurchak Gorge, Sky Bridge experience, dinner, hotel check-in."
        },
        {
            id: 2,
            day: "Day 2",
            image: [`${fivedays3}`, `${fivedays4}`],
            title: "Chon Kemin Valley & Issyk-Kul Lake",
            description: "Breakfast, departure to Chon Kemin Valley, horseback riding tour, lunch, transfer to Issyk-Kul Lake, dinner, hotel check-in."
        },
        {
            id: 3,
            day: "Day 3",
            image: [`${fivedays5}`, `${fivedays6}`],
            title: "Rukh Ordo & Boat Ride",
            description: "Breakfast, visit Rukh Ordo Ethno Complex, lunch, boat ride on Issyk-Kul Lake, dinner, hotel accommodation."
        },
        {
            id: 4,
            day: "Day 4",
            image: [`${fivedays7}`, `${fivedays8}`],
            title: "Kok Moynok Canyon & Burana Tower",
            description: "Breakfast, departure to Kok Moynok Canyon, lunch, visit Burana Tower, move to Bishkek, hotel accommodation."
        },
        {
            id: 5,
            day: "Day 5",
            image: [`${fivedays9}`],
            title: "Shopping & Farewell",
            description: "Visit Tsum Mall, buy souvenirs and national clothes, farewell lunch, transfer to Manas Airport."
        }
    ]
};
const sixDayTour = {
    days: 6,
    get title() {
        return `Kyrgyzstan Grand Adventure. ${this.days} Days`;
    },
    description: "A 6-day journey through Kyrgyzstan’s majestic gorges, Issyk-Kul Lake, cultural sites, and mountain adventures. Experience hot springs, eagle shows, yurt stays, and traditional Kyrgyz cuisine.",
    banner: `${days6bg}`,
    season: "Spring / Summer / Autumn",
    duration: "6 full days",
    maps: `${karta6days}`,
    itineraries: [
        {
            id: 1,
            day: "Day 1",
            image: [`${sixdays1}`, `${sixdays2}`, `${sixdays3}`],
            title: "Gorges & Traditions",
            description: "Meet in airport, departure to Chunkurchak Gorge, Sky Bridge experience, cable cars, traditional lunch “Apamdyn kattamasy”, visit Burana Tower, Chon Kemin Gorge, dinner, hotel accommodation."
        },
        {
            id: 2,
            day: "Day 2",
            image: [`${sixdays4}`, `${sixdays5}`],
            title: "Nature & Nomadic Spirit",
            description: "Breakfast, horseback riding tour, Boom Gorge drive, lunch, arrival at Issyk-Kul Lake, stay in a traditional yurt town, accommodation in yurt."
        },
        {
            id: 3,
            day: "Day 3",
            image: [`${sixdays6}`, `${sixdays7}`],
            title: "Adventure & Culture",
            description: "Breakfast, national show program, archery, golden eagle show, lunch, Barskoon Gorge waterfalls, visit Zheti-Oguz Gorge and Broken Heart Mountain, dinner, hotel accommodation."
        },
        {
            id: 4,
            day: "Day 4",
            image: [`${sixdays8}`, `${sixdays9}`],
            title: "Altyn-Arashan Adventure",
            description: "Breakfast, trip to Altyn-Arashan Gorge, hot springs bathing, picnic lunch, visit Swallow’s Nest, nature walk, dinner, hotel accommodation in Karakol."
        },
        {
            id: 5,
            day: "Day 5",
            image: [`${sixdays10}`, `${sixdays11}`],
            title: "Lake Shore & Culture",
            description: "Breakfast, visit Rukh Ordo Cultural Center, walk along Issyk-Kul Lake shore, pier stroll, lunch, departure to Bishkek."
        },
        {
            id: 6,
            day: "Day 6",
            image: [`${sixdays12}`],
            title: "Farewell Day",
            description: "Breakfast, Bishkek City Tour, lunch, farewell dinner, transfer to Manas Airport."
        }
    ]
};
const sevenDayTour = {
    days: 7,
    get title() {
        return `Kyrgyzstan Wonders. ${this.days} Days`;
    },
    description: "Experience the best of Kyrgyzstan in 7 days – mountain gorges, Issyk-Kul Lake, nomadic culture, eagle shows, hot springs, and vibrant city life. A perfect mix of nature, adventure, and tradition.",
    banner: `${days7bg}`,
    season: "Spring / Summer / Autumn",
    duration: "7 full days",
    maps: `${karta6days}`,
    itineraries: [
        {
            id: 1,
            day: "Day 1",
            image: [`${sevendays1}`, `${sevendays2}`],
            title: "Arrival & Mountain Escape",
            description: "Meet at Manas Airport, departure to Chunkurchak Gorge, Sky Bridge and cable cars, lunch at mountain café, light hiking, return to Bishkek, dinner, hotel accommodation."
        },
        {
            id: 2,
            day: "Day 2",
            image: [`${sevendays3}`, `${sevendays4}`],
            title: "History & Scenic Views",
            description: "Breakfast, visit Burana Tower and museum, lunch at Kyrgyz café, drive through Boom Gorge, nature walk in Chon-Kemin, dinner, guesthouse accommodation."
        },
        {
            id: 3,
            day: "Day 3",
            image: [`${sevendays5}`, `${sevendays6}`],
            title: "Nomadic Spirit & Issyk-Kul Vibes",
            description: "Breakfast, horseback riding tour, lunch, drive to Issyk-Kul Lake, check-in to yurt camp, lakeshore relaxation, traditional dinner, overnight in yurt under the stars."
        },
        {
            id: 4,
            day: "Day 4",
            image: [`${sevendays7}`],
            title: "Kyrgyz Culture & Mountain Beauty",
            description: "Breakfast, national show program, archery, golden eagle demonstration, lunch, Barskoon Gorge waterfalls, Zheti-Oguz Gorge with Broken Heart Mountain, dinner, hotel accommodation."
        },
        {
            id: 5,
            day: "Day 5",
            image: [`${sevendays8}`, `${sevendays9}`],
            title: "Hidden Paradise: Altyn-Arashan",
            description: "Breakfast, off-road trip to Altyn-Arashan Gorge, hot springs bathing, picnic lunch, visit Swallow’s Nest viewpoint, hike or free time, return to Karakol, dinner, hotel accommodation."
        },
        {
            id: 6,
            day: "Day 6",
            image: [`${sevendays10}`, `${sevendays11}`],
            title: "Culture & Lake Serenity",
            description: "Breakfast, visit Rukh Ordo Cultural Center, stroll along Issyk-Kul shore & pier, lunch with lake view, free time, return to Bishkek, dinner, hotel accommodation."
        },
        {
            id: 7,
            day: "Day 7",
            image: [`${sevendays12}`],
            title: "Farewell Kyrgyzstan",
            description: "Breakfast, Bishkek city tour (Ala-Too Square, parks, bazaar), lunch, farewell dinner in national-style restaurant, transfer to Manas Airport."
        }
    ]
};
const eightDayTour = {
    days: 8,
    get title() {
        return `Kyrgyzstan Explorer Tour. ${this.days} Days`;
    },
    description: "An unforgettable 8-day journey through Kyrgyzstan's mountains, gorges, cultural heritage, and the serene Issyk-Kul Lake. Enjoy horseback riding, eagle shows, yurt stays, hot springs, and breathtaking landscapes.",
    banner: `${days8bg}`,
    season: "Spring / Summer / Autumn",
    duration: "8 full days",
    maps: `${karta8days}`,
    itineraries: [
        {
            id: 1,
            day: "Day 1",
            image: [`${eightdays1}`, `${eightdays2}`],
            title: "Arrival & Bishkek Highlights",
            description: "Meeting at Manas International Airport at 14:15, visit Bishkek city and Ala-Too Square, museum, dinner, departure to Ala Archa Gorge, hotel accommodation."
        },
        {
            id: 2,
            day: "Day 2",
            image: [`${eightdays3}`, `${eightdays4}`, `${eightdays5}`],
            title: "Chunkurchak & Chon-Kemin Adventure",
            description: "Breakfast, departure to Chunkurchak Gorge, Sky Bridge, traditional lunch «Apamdyn kattamasy», visit Burana Tower, explore Chon Kemin Gorge, dinner, hotel accommodation."
        },
        {
            id: 3,
            day: "Day 3",
            image: [`${eightdays6}`],
            title: "Horseback Riding & Yurt Experience",
            description: "Breakfast, horseback riding tour, walking tour, drive through Boom Gorge, lunch, visit Issyk-Kul Lake, accommodation in yurt town."
        },
        {
            id: 4,
            day: "Day 4",
            image: [`${eightdays7}`, `${eightdays8}`],
            title: "Fairy Tale Canyon & Zheti-Oguz",
            description: "Breakfast, visit Fairy Tale Canyon, canyon walk, national show program, archery, golden eagle show, lunch, Barskoon Gorge, Zheti-Oguz Gorge with Broken Heart Mountain, dinner, hotel accommodation."
        },
        {
            id: 5,
            day: "Day 5",
            image: [`${eightdays9}`],
            title: "Karakol Exploration",
            description: "Breakfast, trip to Karakol Gorge, cable car ride, lunch, walk around Karakol city, dinner, hotel accommodation."
        },
        {
            id: 6,
            day: "Day 6",
            image: [`${eightdays10}`, `${eightdays11}`],
            title: "Altyn-Arashan Adventure",
            description: "Breakfast, trip to Altyn-Arashan Gorge, bathing in hot springs, picnic lunch, visit Swallow’s Nest, walk through the gorge, dinner, hotel accommodation in Karakol."
        },
        {
            id: 7,
            day: "Day 7",
            image: [`${eightdays12}`, `${eightdays13}`],
            title: "Gorge Day & Cholpon-Ata",
            description: "Breakfast, trip to Kirchyn Gorge and Grigorievskoye Gorge, lunch, walking tour, drive to Cholpon-Ata, dinner, hotel accommodation."
        },
        {
            id: 8,
            day: "Day 8",
            image: [`${eightdays14}`],
            title: "Culture & Farewell",
            description: "Breakfast, visit Rukh Ordo Cultural Center, walk along Issyk-Kul shore and pier, lunch, return to Bishkek, farewell dinner, transfer to Manas Airport."
        }
    ]
};
const nineDayTour = {
    days: 9,
    get title() {
        return `Kyrgyzstan Ultimate Journey. ${this.days} Days`;
    },
    description: "A 9-day adventure across Kyrgyzstan, combining stunning gorges, Issyk-Kul Lake, yurt stays, eagle shows, hot springs, and authentic cultural experiences.",
    banner: `${days9bg}`,
    season: "Spring / Summer / Autumn",
    duration: "9 full days",
    maps: `${karta9days}`,
    itineraries: [
        {
            id: 1,
            day: "Day 1",
            image: [`${ninedays1}`, `${ninedays2}`],
            title: "Arrival & Ala Archa",
            description: "Meeting at Manas International Airport at 14:15, Bishkek city tour, Ala-Too Square, museum, dinner, departure to Ala Archa Gorge, hotel accommodation."
        },
        {
            id: 2,
            day: "Day 2",
            image: [`${ninedays3}`, `${ninedays4}`, `${ninedays5}`],
            title: "Chunkurchak & Chon-Kemin",
            description: "Breakfast, trip to Chunkurchak Gorge, Sky Bridge, traditional lunch «Apamdyn kattamasy», visit Burana Tower, explore Chon-Kemin Gorge, dinner, hotel accommodation."
        },
        {
            id: 3,
            day: "Day 3",
            image: [`${ninedays6}`, `${ninedays7}`],
            title: "Horse Riding & Nature",
            description: "Breakfast, horseback riding tour, walking tour, Boom Gorge, lunch, return to Chon-Kemin Gorge, hotel check-in."
        },
        {
            id: 4,
            day: "Day 4",
            image: [`${ninedays8}`, `${ninedays9}`],
            title: "Issyk-Kul & Yurt Stay",
            description: "Breakfast, visit Issyk-Kul Lake, yurt town stay, dinner, overnight in yurt."
        },
        {
            id: 5,
            day: "Day 5",
            image: [`${ninedays10}`, `${ninedays11}`],
            title: "Fairy Tale Canyon & Zheti-Oguz",
            description: "Breakfast, visit Fairy Tale Canyon, canyon walk, national show program, archery, eagle show, lunch, Barskoon Gorge, Zheti-Oguz Gorge, Broken Heart Mountain, dinner, hotel accommodation."
        },
        {
            id: 6,
            day: "Day 6",
            image: [`${ninedays12}`],
            title: "Karakol Exploration",
            description: "Breakfast, trip to Karakol Gorge, cable car ride, lunch, walking tour of Karakol city, dinner, hotel accommodation."
        },
        {
            id: 7,
            day: "Day 7",
            image: [`${ninedays13}`, `${ninedays14}`],
            title: "Altyn-Arashan Adventure",
            description: "Breakfast, trip to Altyn-Arashan Gorge, hot spring bathing, picnic lunch, Swallow’s Nest, walking tour, dinner, hotel accommodation in Karakol."
        },
        {
            id: 8,
            day: "Day 8",
            image: [`${ninedays15}`, `${ninedays16}`],
            title: "Gorges & Culture",
            description: "Breakfast, trip to Kirchyn Gorge and Grigorievskoye Gorge, lunch, walking tour, departure to Cholpon-Ata, dinner, hotel accommodation. Visit Rukh Ordo Cultural Center, walk along Issyk-Kul shore and pier, return to Bishkek, farewell dinner."
        },
        {
            id: 9,
            day: "Day 9",
            image: [`${ninedays17}`, `${ninedays18}`],
            title: "Final Adventures",
            description: "Departure to Bishkek, lunch, visit Kashka-Suu Gorge with cable cars or zip line (optional), farewell dinner, transfer to Manas Airport."
        }
    ]
};

const CardDetails = () => {
    const [bgLoaded, setBgLoaded] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const location = useLocation();
    const {Card} = location.state
    let tour
    if (Card.includes('Burana')) {
        tour = Burana;
    } else if (Card.includes('Issyk-Kul')) {
        tour = IssykKul;
    } else if (Card.includes('Karakol')) {
        tour = Karakol;
    } else if (Card.includes('Park')) {
        tour = Park;
    } else if (Card.includes('Kel Suu')) {
        tour = kelsuu;
    } else if (Card.includes('Son-Kul Lake')) {
        tour = sonkul;
    } else if (Card.includes('Kashka Suu')) {
        tour = KashkaSuu;
    } else if (Card.includes('Chunkurchak')) {
        tour = Chun;
    } else if (Card.includes('Zheti')) {
        tour = Zheti;
    } else if (Card.includes('Rukh')) {
        tour = fiveDayTour;
    } else if (Card.includes('Barskoon')) {
        tour = sixDayTour;
    } else if (Card.includes('Chon')) {
        tour = sevenDayTour;
    } else if (Card.includes('Kirchyn')) {
        tour = eightDayTour;
    } else if (Card.includes('Cholpon')) {
        tour = nineDayTour;
    }

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const img = new Image();
        img.src = bg;
        img.onload = () => {
            setBgLoaded(true);
        };
    }, []);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const inclusions = [
        "Comfortable hotel accommodation (you will stay in different hotels along the route, depending on the location)",
        "3 meals a day (breakfast, lunch, dinner)",
        "All transfers included",
        "Professional guide support 24/7",
        "Horseback riding",
        "Beautiful new locations to explore every day"
    ]

    const exclusions = [
        "Flights are not included",
        "Flight tickets",
        "Pocket expenses",
        "Insurance"
    ]

    return (
        <div
            className="relative bg-cover bg-center bg-fixed"
            style={{backgroundImage: `url(${tour.banner})`}}
        >
            <div className={"h-screen"}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col h-2/3 justify-between md:h-1/2 text-white">
                    <Header/>
                    <h1 className="font-bold text-3xl md:text-[64px] text-center p-4">{tour.title}</h1>
                </div>
            </div>

            <div className="relative z-20 flex flex-col md:flex-row p-4 sm:p-6">
                <div
                    className="w-full md:w-2/3 p-4 sm:p-6 rounded-lg shadow-md bg-white/45 backdrop-blur-md relative overflow-hidden">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Itinerary</h3>
                    <div className="mt-4">
                        {tour.itineraries.map((itinerary, index) => (
                            <div key={itinerary.id} className="border-b border-gray-300">
                                <button
                                    className="flex items-center justify-between w-full py-3 sm:py-4 px-3 sm:px-4 text-left text-base sm:text-lg font-semibold"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>Day {index + 1}. {itinerary.title}</span>
                                    {openIndex === index ? "−" : "+"}
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 flex flex-wrap gap-2">
                                        {itinerary.image.map((el, i) => (
                                            <img
                                                key={i}
                                                src={el}
                                                className="md:w-[calc(50%-0.5rem)] w-full  h-64 sm:h-64 object-cover rounded-lg mb-1"
                                                alt={`Itinerary ${index + 1} Image ${i + 1}`}
                                            />
                                        ))}
                                        <p className="text-gray-700">{itinerary.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>


                    <div className="mt-4 md:flex md:flex-col items-start gap-5">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 text-nowrap w-32">What's
                            included</h3>
                        <div className="flex flex-col space-y-2 pt-1">
                            {inclusions.map((item, index) => (
                                <div key={index}
                                     className="flex items-center text-gray-700 text-sm sm:text-base gap-1 px-3">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-shrink-0"
                                    >
                                        <path
                                            d="M12.72 6.79L8.43001 11.09L6.78 9.44C6.69036 9.33532 6.58004 9.2503 6.45597 9.19027C6.33191 9.13025 6.19678 9.09652 6.05906 9.0912C5.92134 9.08588 5.78401 9.10909 5.65568 9.15936C5.52736 9.20964 5.41081 9.28589 5.31335 9.38335C5.2159 9.4808 5.13964 9.59735 5.08937 9.72568C5.03909 9.854 5.01589 9.99133 5.02121 10.1291C5.02653 10.2668 5.06026 10.4019 5.12028 10.526C5.1803 10.65 5.26532 10.7604 5.37 10.85L7.72 13.21C7.81344 13.3027 7.92426 13.376 8.0461 13.4258C8.16794 13.4755 8.2984 13.5008 8.43001 13.5C8.69234 13.4989 8.94374 13.3947 9.13 13.21L14.13 8.21C14.2237 8.11704 14.2981 8.00644 14.3489 7.88458C14.3997 7.76272 14.4258 7.63201 14.4258 7.5C14.4258 7.36799 14.3997 7.23728 14.3489 7.11542C14.2981 6.99356 14.2237 6.88296 14.13 6.79C13.9426 6.60375 13.6892 6.49921 13.425 6.49921C13.1608 6.49921 12.9074 6.60375 12.72 6.79ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
                                            fill="green"/>
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 md:flex md:flex-col items-start gap-5">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 text-nowrap w-32">What's
                            excluded</h3>
                        <div className="flex flex-col space-y-2 pt-1 px-3">
                            {exclusions.map((item, index) => (
                                <div key={index}
                                     className="flex items-center text-gray-700 text-sm sm:text-base gap-1">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#d06b02" strokeWidth="2" fill="none"/>
                                        <path d="M16 8L8 16M8 8L16 16" stroke="#d06b02" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Map</h3>
                        <img className={''} src={tour.maps} alt=""/>
                    </div>
                </div>

                <div
                    className="z-20 h-fit w-full md:w-1/3 p-4 sm:p-6 rounded-lg shadow-md mt-6 md:mt-0 md:ml-6 sticky top-6 bg-white/45 backdrop-blur-md relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 border-b pb-2">{tour.title}</h2>
                        <p className="text-gray-600 mt-4">{tour.description}</p>

                        <div className="mt-4">
                            <p className="text-gray-500 uppercase text-xs font-semibold">Season</p>
                            <p className="text-lg font-semibold text-gray-900">{tour.season}</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-500 uppercase text-xs font-semibold">Duration</p>
                            <p className="text-lg font-semibold text-gray-900">{tour.duration}</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-500 uppercase text-xs font-semibold">Price per person for tour:</p>
                            <div className="mt-1">
                                <div className="text-[#55c20c] text-xl font-bold">
                                    <div className={'flex justify-between items-center'}>
                                        <span>1 person - {tour.days * 250}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>2 people - {tour.days * 320}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>3 people - {tour.days * 450}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>4 people - {tour.days * 600}$</span>
                                    </div>
                                    <div className={'flex justify-between items-center'}>
                                        <span>5+ people - {tour.days * 150}$ per person</span>

                                    </div>
                                </div>
                            </div>
                            <WhatsAppButton title={tour.title}/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-cover bg-bottom bg-fixed" style={{backgroundImage: `url(${tour.banner})`}}>
                <Footer/>
            </div>
        </div>
    )
        ;
};

export default CardDetails;
