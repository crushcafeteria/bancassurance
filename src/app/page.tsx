/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { nanoid } from "nanoid";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import FooterMenu from "./components/FooterMenu";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Forex from "./components/Forex";

const personal = [
    {
        label: 'General Insurance',
        url: '#',
        image: '/general.png'
    },
    {
        label: 'Health Insurance',
        url: '#',
        image: '/health.png'
    },
    {
        label: 'Motor Insurance',
        url: '#',
        image: '/motor.png'
    },
    {
        label: 'Property Insurance',
        url: '#',
        image: '/property.png'
    },
]

export default function Home() {

    return (
        <>
            <TopBar />

            <Header />

            {/* Hero */}
            <div className="w-full bg-center bg-cover h-[65vh] aspect-auto bg-banana flex mt-20 lg:mt-0"
                style={{
                    backgroundImage: `url("/Rectangle 7.png")`
                }}>
                <div className="container mx-auto flex">
                    <div className="bg-earth lg:mr-auto my-auto align-middle lg:w-1/2 space-y-10 bg-opacity-80 relative py-14">
                        <h1 className="text-3xl font-bold text-banana border-l-8 border-banana px-14">
                            NBK Bancassurance Intermediary Limited
                        </h1>
                        <p className="text-2xl text-white leading-normal px-14">
                            A financial safety net designed for you and everything that matters to you.
                        </p>
                    </div>

                </div>
            </div>

            {/* Personal solutions */}
            <div className="container mx-auto py-14">
                <div className="block space-y-10 text-center">
                    <h1 className="font-bold text-3xl">Personal Solutions</h1>
                    <p className="text-2xl max-w-4xl mx-auto">
                        Looking for motor, health, property or general cover? Enjoy quality product offerings with high standards of service from NBK Bancassurance Intermediary Limited.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {personal.map((item) => (
                            <Card item={item} key={nanoid()} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Corporate solutions */}
            <div className="py-20 bg-strawberry">
                <div className="block text-center">
                    <div className="container mx-auto space-y-10">
                        <h1 className="font-bold text-3xl">Corporate Solutions</h1>
                        <p className="text-2xl max-w-4xl mx-auto">
                            NBK Bancassurance Intermediary Limited has partnered with major insurers to offer your organization the best risk management advisory and insurance services in Kenya.
                        </p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {personal.map((item) => (
                                <Card item={item} key={nanoid()} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Forex */}
            <Forex />

            <Footer />
        </>
    );
}
