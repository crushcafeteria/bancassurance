export default function Hero() {
    return (
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
    )
}