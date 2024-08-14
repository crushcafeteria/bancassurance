/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import { nanoid } from "nanoid";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
            <div className="w-full bg-center bg-cover h-[65vh] aspect-auto bg-banana flex"
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
                            <div className="w-full py-14 bg-center bg-cover aspect-auto space-y-6 text-white rounded-lg hover:shadow-lg" key={nanoid()} style={{
                                backgroundImage: `url("${item.image}")`
                            }}>
                                <h3 className="font-bold text-2xl drop-shadow-lg">{item.label}</h3>
                                <button className=" capitalize border-2 border-white px-3 py-1 rounded-lg shadow-lg font-semibold hover:bg-white hover:text-banana">Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Corporate solutions */}
            <div className="py-20 bg-strawberry">
                <div className="block space-y-10 text-center">
                    <h1 className="font-bold text-3xl">Corporate Solutions</h1>
                    <p className="text-2xl max-w-4xl mx-auto">
                        NBK Bancassurance Intermediary Limited has partnered with major insurers to offer your organization the best risk management advisory and insurance services in Kenya.
                    </p>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {personal.map((item) => (
                                <div className="w-full py-14 bg-center bg-cover aspect-auto space-y-6 text-white rounded-lg hover:shadow-lg" key={nanoid()} style={{
                                    backgroundImage: `url("${item.image}")`
                                }}>
                                    <h3 className="font-bold text-2xl drop-shadow-lg">{item.label}</h3>
                                    <button className=" capitalize border-2 border-white px-3 py-1 rounded-lg shadow-lg font-semibold hover:bg-white hover:text-banana">Learn More</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Forex */}
            <div className="bg-strawberry2">
                <div className="container mx-auto relative">
                    <div className="grid grid-cols-12 py-4">
                        <div className="col-span-1 pr-4">
                            <img src="/FOREX.png" className="w-32" />
                        </div>
                        <div className="col-span-11 overflow-x-hidden text-lg border-x">
                            <Marquee pauseOnHover className="inline">
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                                <div className="mx-4">
                                    USD: Buying: 86.17
                                </div>
                            </Marquee>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="block">
                <div className="block pt-14">
                    <div className="block mx-auto max-w-3xl mb-14">
                        <div className="relative border rounded flex p-1">
                            <input type="text" className="w-full text-2xl px-5 py-3 flex-auto outline-none" placeholder="I am looking for..." />
                            <button className="border bg-earth text-banana rounded p-4 flex-shrink inline-block">
                                <FontAwesomeIcon icon={faSearch} className="w-5" />
                            </button>
                        </div>
                    </div>
                    <img src="/skyline.png" className="w-full" />
                </div>
                <div className="block py-10 bg-banana">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-5 gap-6">
                            <div className="flex flex-col space-y-4">
                                <h3 className="font-bold text-2xl">For You</h3>
                                <a href="" className="text-xl">Open an account</a>
                                <a href="" className="text-xl">Get a loan</a>
                                <a href="" className="text-xl">Invest</a>
                                <a href="" className="text-xl">Get a card</a>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <h3 className="font-bold text-2xl">For You</h3>
                                <a href="" className="text-xl">Open an account</a>
                                <a href="" className="text-xl">Get a loan</a>
                                <a href="" className="text-xl">Invest</a>
                                <a href="" className="text-xl">Get a card</a>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <h3 className="font-bold text-2xl">For You</h3>
                                <a href="" className="text-xl">Open an account</a>
                                <a href="" className="text-xl">Get a loan</a>
                                <a href="" className="text-xl">Invest</a>
                                <a href="" className="text-xl">Get a card</a>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <h3 className="font-bold text-2xl">For You</h3>
                                <a href="" className="text-xl">Open an account</a>
                                <a href="" className="text-xl">Get a loan</a>
                                <a href="" className="text-xl">Invest</a>
                                <a href="" className="text-xl">Get a card</a>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <h3 className="font-bold text-2xl">For You</h3>
                                <a href="" className="text-xl">Open an account</a>
                                <a href="" className="text-xl">Get a loan</a>
                                <a href="" className="text-xl">Invest</a>
                                <a href="" className="text-xl">Get a card</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block py-5 bg-earth text-white text-base">
                    <div className="container mx-auto">
                        <div className="flex space-x-4">
                            <div className="flex-shrink">
                                Regulated by the Central Bank of Kenya
                            </div>
                            <div className="flex-shrink">
                                Disclaimer
                            </div>
                            <div className="flex-shrink">
                                T&Cs
                            </div>
                            <div className="flex-shrink">
                                Tariff Guide
                            </div>
                            <div className="flex-shrink">
                                Privacy Policy
                            </div>
                            <div className="flex-auto">
                                <div className="flex space-x-6 text-white float-end">
                                    <div className="flex-shrink">
                                        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                                    </div>
                                    <div className="flex-shrink">
                                        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                                    </div>
                                    <div className="flex-shrink">
                                        <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
                                    </div>
                                    <div className="flex-shrink">
                                        <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                                    </div>
                                    <div className="flex-shrink">
                                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
