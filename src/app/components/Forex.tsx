import Marquee from "react-fast-marquee";

export default function Forex() {
    return (
        <div className="bg-strawberry2">
            <div className="container mx-auto relative">
                <div className="grid grid-cols-12 py-4">
                    <div className="col-span-1 lg:pr-4 text-center">
                        <img src="/FOREX.png" className="w-32 hidden lg:block" />
                        <span className="block lg:hidden">FX</span>
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
    )
}