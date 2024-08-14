/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import { nanoid } from "nanoid";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import FooterMenu from "../components/FooterMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Forex from "../components/Forex";

export default function About() {

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
                            About Bancassurance
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-20 space-y-20">

                {/* About */}
                <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-7">
                        <>
                            <h1 className="text-3xl font-bold mb-4">
                                About Bancassurance
                            </h1>
                            <p className="text-lg text-justify leading-loose">
                                NBK Bancassurance Intermediary limited NBK Bancassurance Intermediary Limited, was established in 2009 . It is a fully-fledged subsidiary of National Bank of Kenya Limited, established to meet the insurance needs of our customers and the bank. NBK Bancassurance Intermediary is regulated by the Insurance Regulatory Authority. We have partnered with major insuarance companies in Kenya to provide you with competitive produts and high standards of service.
                            </p>
                        </>
                        <>
                            <h1 className="text-3xl font-bold mt-10 mb-4">
                                Why NBK Bancassurance Intermediary Ltd
                            </h1>
                            <p className="text-lg text-justify leading-loose pl-8">
                                <ul className="list-disc">
                                    <li className="pl-4">Convenience of buying insurance through a trusted intermediary</li>
                                    <li className="pl-4">One stop shop for all your insurance and banking needs.</li>
                                    <li className="pl-4">Risk advisory on suitable insurance coverage based on your needs</li>
                                    <li className="pl-4">Insurance claims</li>
                                </ul>
                            </p>
                        </>
                    </div>
                    <div className="lg:col-span-5 border bg-earth text-white px-8 py-12 space-y-5">
                        <h1 className="text-2xl font-bold">
                            Interested in bancassurance or have a question?
                        </h1>
                        <div className="form-group">
                            <label htmlFor="">Full Name</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Message</label>
                            <textarea rows={3} className="form-control"></textarea>
                        </div>
                        <button className="bg-banana text-earth px-8 py-3 w-full text-xl font-bold">
                            <div className="flex">
                                <div className="flex-auto text-left">
                                    Send My Request
                                </div>
                                <div className="flex-shrink">
                                    <FontAwesomeIcon icon={faArrowRight} className="w-5" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* values */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="bg-strawberry text-center p-6 space-y-3">
                        <img src="/mission.png" className="mx-auto" />
                        <h3 className="text-xl font-bold">Our Mission</h3>
                        <p className="text-sm">
                            We are dedicated to care and skill in providing competitive insurance and risk management solutions to our customers, providing attractive opportunities to our employees and improving our stakeholders’ value.
                        </p>
                    </div>
                    <div className="bg-strawberry text-center p-6 space-y-3">
                        <img src="/vision.png" className="mx-auto" />
                        <h3 className="text-xl font-bold">Our Vision</h3>
                        <p className="text-sm">
                            To be the insurance intermediary of choice for our customers.
                        </p>
                    </div>
                    <div className="bg-strawberry text-center p-6 space-y-3">
                        <img src="/purpose.png" className="mx-auto" />
                        <h3 className="text-xl font-bold">Our Purpose</h3>
                        <p className="text-sm">
                            We believe that insurance is one of the best ways of protecting your wealth. Our solutions provide our customers with an opportunity to manage and mitigate against any perils.
                        </p>
                    </div>
                    <div className="bg-strawberry text-center p-6 space-y-3">
                        <img src="/purpose.png" className="mx-auto" />
                        <h3 className="text-xl font-bold">Our Customer Promise</h3>
                        <p className="text-sm">
                            To put our customers firmly at the forefront of everything we do and deliver on our promises.
                        </p>
                    </div>
                </div>
            </div>

            <Forex />

            <Footer />
        </>
    );
}
