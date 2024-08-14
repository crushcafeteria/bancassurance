import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterMenu from "./FooterMenu";

export default function Footer() {
    return (
        <div className="block">
            <div className="container pt-14">
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
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                        <FooterMenu title="For You" menu={[
                            { label: 'Open an account', url: '#' },
                            { label: 'Get a loan', url: '#' },
                            { label: 'Invest', url: '#' },
                            { label: 'Get a card', url: '#' },
                        ]} />
                        <FooterMenu title="For Your Biashara" menu={[
                            { label: 'Open an account', url: '#' },
                            { label: 'Get a loan', url: '#' },
                            { label: 'Trade Finance', url: '#' },
                        ]} />
                        <FooterMenu title="For You" menu={[
                            { label: 'Accounts', url: '#' },
                            { label: 'Financing', url: '#' },
                            { label: 'Services', url: '#' },
                        ]} />
                        <FooterMenu title="Quick Links" menu={[
                            { label: 'FAQs', url: '#' },
                            { label: 'Careers', url: '#' },
                            { label: 'Complaints', url: '#' },
                            { label: 'Service Charter', url: '#' },
                        ]} />
                        <div className="block space-y-4 col-span-1">
                            <h3 className="font-bold text-2xl block">Banking Hours</h3>
                            <div className="flex flex-col space-y-4">
                                <div className="text-xl">Mon - Fri : 8am - 6pm</div>
                                <div className="text-xl">Sat : 8am - 12pm</div>
                                <div className="text-xl">Sun : Closed</div>
                                <div className="text-xl">Public Holidays : Closed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block py-5 bg-earth text-white text-base">
                <div className="container mx-auto">
                    <div className="flex space-x-4">
                        <div className="flex-shrink hidden lg:block">
                            Regulated by the Central Bank of Kenya
                        </div>
                        <div className="flex-shrink hidden lg:block">
                            Disclaimer
                        </div>
                        <div className="flex-shrink hidden lg:block">
                            T&Cs
                        </div>
                        <div className="flex-shrink  hidden lg:block">
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
    )
}